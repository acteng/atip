# Active Travel Infrastructure Platform

ATIP lets you design, modify and share active travel infrastructure plans.

It's developed by the Alan Turing Institute in collaboration with Active Travel England.

## Using ATIP

The development version of ATIP with data for England is available for use at <https://acteng.github.io/atip>.
Note: this is not a production service and we make no guarantees about the site's uptime or about backwards compatibility of ATIP files.

### Using ATIP in other places

You can build your own hosted instance but will need some technical experience to get started.
Please [file an issue](https://github.com/acteng/atip/issues/new) to start a conversation about using ATIP in other places.

Very roughly, you'd need to:

1.  Replace `assets/authorities.geojson` with appropriate boundaries for your region, and adjust Svelte components using this file
2.  Generate files for the route-snapper tool to work, using <https://github.com/acteng/atip-data-prep>. Right now, this only requires OpenStreetMap data and should work worldwide, but this may change.
3.  Host those files and a compiled version of this Svelte app somewhere. You only need a static file host, like S3.

### Query parameters

The main `scheme.html` page takes a few URL query parameters:

- `authority` is required, and must match a feature's `name` in `assets/authorities.geojson`
- `schema` is `v1`, `v2`, `planning`, `criticals`, etc and determines the data entry form
- `geojsonUrl` will initially load a GeoJSON file from the specified URL. Otherwise, the last file is loaded from local storage, uniquely keyed by (authority, schema).
- `style` can be `streets` (implied default) or `hybrid` (for a satellite basemap)

## Development

See our current roadmap on the [Milestones](https://github.com/acteng/atip/milestones?direction=desc&sort=completeness&state=open) page. Issues, feature requests, and pull requests are welcome. Please open an issue if you're interested in contributing!

See the [developer guide](docs/developer_guide.md) if you want to work on ATIP.
