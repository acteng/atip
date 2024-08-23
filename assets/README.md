- Material Icons courtesy <https://fonts.google.com/icons>
- [Camera icon](https://icon-icons.com/icon/screenshot-cursor-camera/100181) by Luc Chaissac, CC BY 4.0
- Google logo from https://developers.google.com/static/maps/documentation/images/google_logo.zip and is copyright Google
- Crest is from https://www.gov.uk/government/organisations/active-travel-england

`authority_names.json` is generated from `authorities.geojson` like this:

```
cat assets/authorities.geojson | jq '.features[].properties.name' | sort | jq -cs '.' > assets/authority_names.json
```
