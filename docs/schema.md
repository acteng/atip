# Schema design doc

This document has some evaluation criteria and open questions regarding the
data schema that ATE is designing, as of spring 2023.  ATIP has already been
used to collect data about planned active travel schemes for ATF4, but aside
from mapping the geometry of interventions, we imposed only the simplest
categorization -- is it a route, area, crossing, or something else? Going
forward, we want to collect (and analyze) much more structured data -- but what
specifically?

This doc is just a brainstorm / set of discussion questions, not representing any final decisions or describing anything built.

## Evaluation

How do we know if a schema will do its job well?

- Can ATE inspections and data science teams use the data to do their job?
  - Is it sufficient? If it has too much detail, is it easy to downsample and
    present a simplified view?
- Is it easy for LAs to fill out?
  - This will partly depend on the UX of ATIP
- How well do the ATF4 submissions fit into it?
  - Note that we don't need to capture absolutely everything -- a free-form
    "other" category is always necessary to keep
- Can the schema gracefully evolve over time?
  - Generally, collecting more details about a type of intervention or
    collecting new types of interventions entirely is easy
  - Changing the details collected about an intervention may be harder
  - Changing how we reference existing road geometry in the presence of dual
    carriageways may be very difficult, for instance
- How much does the schema bidirectionally map to and from existing data, such
  as OpenStreetMap?

Ultimately, one of the best exercises to test a schema is to map real schemes
with it.

## Implementation details

Largely deferring these for now; we need to figure out **what** data to collect,
rather than how to store and manipulate it.

### Metadata

Nonetheless, for everything we might collect, we could imagine ATIP guiding
people through filling out details for it. Imagine different route segregation
or crossing types. For each case, we could ask:

- How should we symbolize / visualize it on the map in ATIP?
- How do we describe it?
- When does ATE recommend this choice? What references to LTN 120 and other
  design standards can we point to?
- Approximately how much does this cost?
  - Of course this could depend on many factors we don't want to focus on for
    data collection, but can we give rough estimates?
- Do we have some real-life example photos to show?
  - "Part separated" vs "stepped" vs "advisory lane" route types could be much
    easier to see than to describe!

### Encoding

We've been using GeoJSON with JSON properties so far, but we may revisit this
as we figure out backend storage.

## Prior art

We're by no means the first group to go through this exercise of creating a
taxonomy for active travel infrastructure. We should learn from, and possibly be
compatible with, other schemas like:

- OpenStreetMap (OSM)
  - For example,
    <https://wiki.openstreetmap.org/wiki/Proposed_features/separation> is a
    newer page about types of physical segregation
  - This covers all types of infrastructure and has worldwide scope; we have a
    more limited domain
- [osm2streets](https://github.com/a-b-street/osm2streets)
  - This is an attempt to represent street networks with sufficient detail to
    run a traffic simulation: individual lanes, turning movements, traffic
    signal timing, etc.
  - Its purpose is also to simplify and normalize OSM data.
- TfL's Cycling Infrastructure Database
  - See
    <https://wiki.openstreetmap.org/wiki/TfL_Cycling_Infrastructure_Database>
- Ordnance Survey
- ATF4 guidance
  - See
    <https://www.gov.uk/government/publications/how-to-complete-the-active-travel-fund-4-proforma/guidance-note-for-local-authorities-to-support-completion-of-the-active-travel-fund-4-proforma#types-of-infrastructure>
  - The questions asked are usually just "is this high, medium, or low
    complexity?" but this is computed from other details.

# Open questions

These're some of the bigger questions I want to resolve.

- What do we need to know about nearby streets?
  - Do we need to know about every side road that intersects a proposed route?
  - What about roads one or two intersections away? Do we need context on
    everything near an intervention?
  - What do we need to know -- width, speed, lane configuration (including turn
    lanes)?
- How do you reason about dual carriageways and split roads?
  - Blackfriars bridge
  - St George
  - Borough station
- Should our schema include contextual data that changes over time?
  - 85%ile speed and average traffic count
- Does our schema include both details we ask LAs to input and details that we
  can automatically calculate?
  - I'd say yes; over time, we can automate "existing width"
- For 2023 (v1 or so timeline), how much detail needs to be in ATIP and part of
  automated analysis?
  - When would you expect/prefer to open a CAD or PDF file manually to answer
    something?
- Do you ever need to look at traffic signal timing plans (from the main
  junction or nearby)? What do you use them for?

## A sample schema

Other links with some specifics:

- A [Google doc](https://docs.google.com/document/d/1fi8OupRlI4HptWIF_NTdp73XQmqYwOcSYBaeiN2z5jY/edit?usp=sharing)
- <https://github.com/acteng/atip/blob/main/src/schemas/v2.json>: A schema described in JSON that gets automatically turned into a web form and TypeScript types.

### Routes

- Types
  - on the road - parallel to a road
  - dedicated off-road, ie through a park
  - canal towpath
- Users
  - Cycle or foot only?
  - If shared, any marked separation?
- Cycle lanes on road
  - width (min, max, average, exact geometry)
  - surface type
  - segregation on left and right (from moving vehicles, parked cars, buses,
    pedestrians)
    - <https://wiki.openstreetmap.org/wiki/Proposed_features/separation#Typical_separation_values>
- Upgrades to existing routes
  - resurface (fix muddy path)
  - widening -- from what to what?
  - add CCTV and lighting along path

### Crossings

- grade separated
  - bridge
  - tunnel - at-grade
- signalised
  - pegasus
  - puffin
  - toucan
  - need to press beg button? or auto-activated by sensor? or on a timer?
  - max time between pressing button and getting green?
  - how long does green last?
- priority
  - zebra
  - school?
  - parallel?
- uncontrolled
  - refuges
  - dropped kerbs
  - tactile pavement
- does it match pedestrian's desire line?

### Areas

...

### Other

- advanced stop lines / bike box
  - how many seconds between the bike and car signal going green?
- modal filters
  - point or diagonal?
  - physical implementation: planter, bollard, raised kerb, bus gate / camera
  - exceptions to entry? residents?
- parking (racks vs hangar, capacity)
- pavement extension / bulb-out
- side road treatment / raised junction
- wayfinding signs
- markings on road
- new parking restrictions
