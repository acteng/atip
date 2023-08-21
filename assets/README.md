- Material Icons courtesy <https://fonts.google.com/icons>
- [Camera icon](https://icon-icons.com/icon/screenshot-cursor-camera/100181) by Luc Chaissac, CC BY 4.0

`authority_names.json` is generated from `authorities.geojson` like this:

```
cat assets/authorities.geojson | jq '.features[].properties.name' | sort | jq -cs '.' > assets/authority_names.json
```
