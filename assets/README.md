Material Icons courtesy https://fonts.google.com/icons

`authority_names.json` is generated from `authorities.geojson` like this:

```
cat assets/authorities.geojson | jq '.features[].properties.name' | sort | jq -cs '.' > assets/authority_names.json
```
