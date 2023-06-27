# Backend design doc

This is a design doc proposing some possible approaches for an ATIP backend. It doesn't represent any final decisions or describe anything actually built.

As of June 2023, ATIP is a web app for editing GeoJSON data. Those GeoJSON files are stored in each user's browser local storage and manually saved/loaded as local files. There is no central place to submit and store files, or any concept around tracking changes to a file.

Terminology:

- A **scheme** is one or more infrastructure interventions represented as a single ATIP GeoJSON file.
- An **intervention** is a single point (e.g. crossing), line (e.g. route) or area (e.g. area-wide traffic management intervention) that is part of a scheme.
- **Authorities** are the groups submitting schemes for some area. 
- **Central** is the one group reviewing schemes from all authorities.

Terminology specific to the UK:

- ATE is Active Travel England, acting as "Central"
- GDS is [Government Digital Service](https://www.gov.uk/government/organisations/government-digital-service)

## Requirements

The primary goal of this doc is to facilitate Central and authorities collaborating on schemes. An example interaction might be:

1.  User1 from an authority submits a scheme and supplementary PDF files
2.  User2 from Central inspections comments on the scheme
3.  User1 responds to comments, then submits a 2nd version of the scheme
4.  User2 reviews the changes (viewable as a diff and with the existing regular ATIP tool), then resolves the comment

There are other tasks for which ATIP may later need a backend, like synchronizing data with OpenStreetMap. These are out-of-scope.

### User stories

- as an authority
	- MVP: submit a scheme in various stages (for initial feedback or to request funding)
	- MVP: submit new versions of an existing scheme
	- MVP: respond to feedback
	- MVP: see a timeline view of all interactions with Central, including each version of a scheme
	- out-of-scope: search or browse schemes by other authorities, to learn about best practices or other approaches to some common situation
	- out-of-scope: share/publish scheme data publicly, as part of public consultation
- as Central inspections
	- MVP: search or browse schemes across all authorities
	- MVP: give or respond to feedback to a scheme, whether it's proposed or already built
	- out-of-scope: assign particular inspectors to a scheme or track outstanding tasks
- as Central data analysts
	- MVP: access all submitted schemes in bulk for offline analysis

## Data & storage

Not being prescriptive about a specific database yet, but imagine we're doing something relational. We need to decide roughly what rows, or keys in a blob store, will contain.

### Data model for schemes

A scheme is not submitted once and never again edited; it has a full lifecycle from initial proposal, iteration with feedback, being funded, being constructed, and being inspected once built. We have to decide what level of granularity to store schemes.

The most coarse-grained approach is to store the entire GeoJSON blob per scheme and version. In order to understand how a scheme changes between versions, we would need to calculate and visualize a diff from the raw list of interventions.

Per scheme, we could instead store individual edit commands, allowing for more granular undo/redo. A command might be something like `delete feature 5` or `modify feature 7 with geometry X and properties Y`. The user could undo/redo through this detailed command list, and also explicitly "save" a named version in this command history, and submit that for review.

Some open questions about schemes:

- How "big" is it? For proposals, the meaningful unit could be the set of interventions for which funding is requested.
- How should alternate proposals be represented -- as more interventions in the same scheme, or as a separate scheme?
- Should there be any grouping of features within a scheme? Once we collect more detail about linear infrastructure, it may be split into many pieces, based on where the physical design or road constraints change. Crossings may be useful to group to a route. A school street intervention may logically consist of a few physical features.
- Some options for grouping:
	- optional "flat" grouping within a scheme -- a feature is either without a group, or part of exactly one named group
	- list of string tags, which can be filtered / queried using boolean operators ("school street" AND "alternative B")
	- arbitrary hierarchical nesting
- How do we identify schemes over time?

If we decide features or groups of features are the unit that should be stored on its own, then:

- How do we uniquely refer to a feature, especially if its geometry changes or gets split / adjusted through versions?
- Does a feature belong to exactly one scheme?

### Data model for the rest

TODO, requirements still unclear. How do we model:

- comments
	- Are they just pins on a map? Associated to one feature, or several, or a group, or an entire scheme?
	- How will they be associated with a particular version of a scheme or feature?
- supplementary files
- the timeline view
	- a linear set of changes, referring to individual scheme versions (or feature versions), comments, files uploaded, scheme status changes, etc?

### Storage

We need to pin down the data model more before choosing the database style -- relational, JSON blob, something with spatial indexing, etc.

As a "strawman" step towards managing interactions between Central and each authority, we could do something very simple:

- Have one Dropbox / Sharepoint / etc folder per authority, with appropriate edit rights. This would just organize files that today may be scattered through emails or other places
- Use git, with a similar directory structure. This makes sure we never lose track of old versions of any file.

A more practical, but still simple, approach would be a blob store, like S3 or GCS. We would use directory structure carefully, versioning things using subdirectories.

Most realistically, we will go with some kind of GCP-hosted database.

Whatever we choose needs to comply with all GDS standards. Luckily, the scale of our storage needs is not big -- all GeoJSON scheme data collected so far is under 50MB (uncompressed, and with inappropriately long coordinate precision). Even with multiple versions of files, many more schemes, supplementary files, etc, I would be surprised if we outgrew what a developer's personal laptop could comfortably fit. (This may become untrue if we are very inefficient about storing undo/redo command history.)

### Data migrations

We should have a principled way of approaching data schema migrations. They **will** happen, some known examples being:

- introducing some grouping for features within a scheme
- trimming coordinate precision
- evolving a v2 schema for describing interventions in more detail

In an ideal situation, we can express migrations as two lossless functions, that transform the old to the new, and the new to the old. This will not be (completely) true for the examples above. So, we have to decide, possibly on a case-by-case basis, who is responsible for updating the data, if it can't be done automatically. For example, after we settle on a v2 schema, will we ask some or all authorities to fill out new forms for existing interventions? Will we attempt to automate this for them, using some kind of text parsing on the freeform description? What if the new schema requires them to split a linear route every time the cross-section design changes?

## API

The data model and storage are likely the difficult parts of this design; the API and server implementing it should be much simpler. They can just be a thin **stateless** wrapper, performing authentication and then interacting with the database. Thus, they could be serverless, since the start-up time should be trivial.

We should check if GDS prefers any particular languages or frameworks. Some options that some/all of the team is familiar with:

- Go
- Python (Flask?) -- is the GIL a problem?
- Rust (overkill, Dustin not in favor)
- Others?

We can figure out the JSON (or gRPC?) API as we go. The output would generally be an ATIP GeoJSON file, or the currently-evolving combined scheme GeoJSON format. Some endpoints would be:

- get one scheme + version
- get the latest version of a scheme
- update one scheme
- get all schemes combined (possibly filtering the results)
- submit/save a scheme
- submit/save edits

### Svelte / UI changes

We need to integrate whatever GDS auth layer. Talking to the backend may be trivial (`fetch` calls), or maybe we use something like websockets for saving commands while people edit.

We should be very careful to keep the existing ATIP pages (browsing authorities, editing a scheme, and browsing a bunch of combined schemes) able to be used **without** any of the backend and database this doc describes. The current file-based approach is very simple to deploy. There may be other users who don't want any sort of backend. So, we need to find a way to make the frontend changes agnostic to a backend (the current one being "local storage").

Similarly, whatever backend we develop will inevitably be coupled to ATE use cases, scheme metadata, etc. Making it generic to allow another org to someday deploy it is not high priority. All the same, we should future-proof this from the start by keeping all the backend code open source from the start, using Docker and Terraform and similar to provision cloud resources based on config that somebody could easily adjust. There will be exceptions (like GDS auth integration), but we should try to keep things reasonably modular.

### Syncing

Suppose somebody is editing an ATIP scheme. How often should the frontend save the changes to the cloud? Should this only happen when the user explicitly saves and submits a version of the scheme? Should we log every command/edit and stream those to a database with something like websockets?

How should concurrent edits work? We do **not** want to take on the immense technical and design complexity of an app with real-time collaboration, like Google Docs or Felt or Figma, without very good reason. Can we ensure only one person from an authority is submitting a new version of some scheme at a time? Should we surface something in the UI to show the user currently editing a scheme? Can we come up with a robust UI and algorithm to diff two schemes and guide the user through resolving any conflicts, and make the user submitting a scheme second deal with any conflicts?

### IAM / permissions

I'm hoping the GDS auth system solves this for us. I would imagine we have, or can easily configure, groups of users and define some permissions in our API. Within an authority, there are read-only users and editors, who can submit a scheme. Within ATE, we have read-only data analysts, and inspectors who can write comments, but not directly modify a scheme.
