# Active Travel Infrastructure Platform

ATIP lets you design, modify and share active travel infrastructure plans.

It's developed by the Alan Turing Institute in collaboration with Active Travel England.

## Using ATIP

The development version of ATIP with data for England is available for use at <https://acteng.github.io/atip>.
Note: this is not a production service and we make no guarantees about the site's uptime or about backwards compatibility of ATIP files.

### Query parameters

The main `scheme.html` page takes a few URL query parameters:

- `authority` is required, and must match a feature's `name` in `assets/authorities.geojson`
- `schema` is `v1` or `pipeline` and determines the data entry form
- `geojsonUrl` will initially load a GeoJSON file from the specified URL. Otherwise, the last file is loaded from local storage, uniquely keyed by (authority, schema).
- `style` can be `streets` (implied default) or `hybrid` (for a satellite basemap)

## Development

See our current roadmap on the [Milestones](https://github.com/acteng/atip/milestones?direction=desc&sort=completeness&state=open) page. Issues, feature requests, and pull requests are welcome. Please open an issue if you're interested in contributing!

See the [developer guide](docs/developer_guide.md) if you want to work on ATIP.

### Using ATIP in other places

You can set up the scheme sketcher in another place, using [the common library](https://github.com/acteng/scheme-sketcher-lib). You'll need technical experience to do this. Please [file an issue](https://github.com/acteng/atip/issues/new) to start a conversation.
