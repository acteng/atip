import type { InfrastructureTaxonomyObject } from "types";

export const infrastructureFormInformation: InfrastructureTaxonomyObject = {
  "amenity":
  {
    "group": "amenity",
    "types": [
      {
        "name": "bike hangar",
        "possible_measurements": [
          {
            "name": "capacity",
            "unit": "bikes",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "bike parking",
        "possible_measurements": [
          {
            "name": "capacity",
            "unit": "bikes",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "bus_stop_treatment": {
    "group": "bus stop treatment",
    "types": [
      {
        "name": "bus stop bypass",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "bus stop placement on highway",
                "valid_options": [
                  {
                    "option": "built-out"
                  },
                  {
                    "option": "in-line"
                  },
                  {
                    "option": "lay-by"
                  }
                ]
              },
              {
                "feature": "has bus stop shelter",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has level boarding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "level of interaction between cyclists and bus stop users",
                "valid_options": [
                  {
                    "option": "low interaction"
                  },
                  {
                    "option": "medium interaction"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "shared use bus stop",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "bus stop placement on highway",
                "valid_options": [
                  {
                    "option": "built-out"
                  },
                  {
                    "option": "in-line"
                  },
                  {
                    "option": "lay-by"
                  }
                ]
              },
              {
                "feature": "has bus stop shelter",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has level boarding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "level of interaction between cyclists and bus stop users",
                "valid_options": [
                  {
                    "option": "high interaction"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "bus stop boarder",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "bus stop placement on highway",
                "valid_options": [
                  {
                    "option": "built-out"
                  },
                  {
                    "option": "in-line"
                  },
                  {
                    "option": "lay-by"
                  }
                ]
              },
              {
                "feature": "has bus stop shelter",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has level boarding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "level of interaction between cyclists and bus stop users",
                "valid_options": [
                  {
                    "option": "high interaction"
                  },
                  {
                    "option": "low interaction"
                  },
                  {
                    "option": "medium interaction"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "untreated bus stop",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "bus stop placement on highway",
                "valid_options": [
                  {
                    "option": "built-out"
                  },
                  {
                    "option": "in-line"
                  },
                  {
                    "option": "lay-by"
                  }
                ]
              },
              {
                "feature": "has bus stop shelter",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has level boarding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "level of interaction between cyclists and bus stop users",
                "valid_options": [
                  {
                    "option": "low interaction"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "crossing": {
    "group": "crossing",
    "types": [
      {
        "name": "marked priority",
        "possible_measurements": [
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "number of lanes crossed",
            "unit": "lanes",
            "type": "contextual"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "at side-road",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is continuous footway",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "junction has tight radii",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "pedestrians have priority over traffic",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "permitted movements at side-road junctions",
                "valid_options": [
                  {
                    "option": "entry and exit"
                  },
                  {
                    "option": "entry only"
                  },
                  {
                    "option": "exit only"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "stand-alone",
            "possible_features": [
              {
                "feature": "fulfils routing desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "fulfils single movement desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "pedestrians have priority over traffic",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "provides connection to bus stop",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "pedestrians have priority over traffic",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "parallel zebra",
        "possible_measurements": [
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "at side-road",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is continuous footway",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "junction has tight radii",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "permitted movements at side-road junctions",
                "valid_options": [
                  {
                    "option": "entry and exit"
                  },
                  {
                    "option": "entry only"
                  },
                  {
                    "option": "exit only"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "stand-alone",
            "possible_features": [
              {
                "feature": "fulfils routing desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "fulfils single movement desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "provides connection to bus stop",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "ped-x",
        "possible_measurements": [
          {
            "name": "crossing speed",
            "unit": "mps",
            "type": "contextual"
          },
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "user wait time",
            "unit": "s",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by audio",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by rotating cone",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by visual aids",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "pegasus",
        "possible_measurements": [
          {
            "name": "crossing speed",
            "unit": "mps",
            "type": "contextual"
          },
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "user wait time",
            "unit": "s",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by audio",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by rotating cone",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by visual aids",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "pelican",
        "possible_measurements": [
          {
            "name": "crossing speed",
            "unit": "mps",
            "type": "contextual"
          },
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "user wait time",
            "unit": "s",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by audio",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by rotating cone",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by visual aids",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "puffin",
        "possible_measurements": [
          {
            "name": "crossing speed",
            "unit": "mps",
            "type": "contextual"
          },
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "user wait time",
            "unit": "s",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by audio",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by rotating cone",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by visual aids",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "sparrow",
        "possible_measurements": [
          {
            "name": "crossing speed",
            "unit": "mps",
            "type": "contextual"
          },
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "user wait time",
            "unit": "s",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by audio",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by rotating cone",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by visual aids",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "toucan",
        "possible_measurements": [
          {
            "name": "crossing speed",
            "unit": "mps",
            "type": "contextual"
          },
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "user wait time",
            "unit": "s",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by audio",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by rotating cone",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "safe to cross indicated by visual aids",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "uncontrolled",
        "possible_measurements": [
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "number of lanes crossed",
            "unit": "lanes",
            "type": "contextual"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "stand-alone",
            "possible_features": [
              {
                "feature": "fulfils routing desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "fulfils single movement desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "provides connection to bus stop",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "zebra",
        "possible_measurements": [
          {
            "name": "number of crossings",
            "unit": "crossings",
            "type": "output"
          },
          {
            "name": "refuge width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "at side-road",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is continuous footway",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "junction has tight radii",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "permitted movements at side-road junctions",
                "valid_options": [
                  {
                    "option": "entry and exit"
                  },
                  {
                    "option": "entry only"
                  },
                  {
                    "option": "exit only"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "stand-alone",
            "possible_features": [
              {
                "feature": "fulfils routing desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "fulfils single movement desire line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "provides connection to bus stop",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "has buildout",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has dropped kerbs",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has pedestrian refuge",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has raised table",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has tactile paving",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "setback from junction",
                "valid_options": [
                  {
                    "option": "fully setback"
                  },
                  {
                    "option": "not setback"
                  },
                  {
                    "option": "partially setback"
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  "junction_treatment": {
    "group": "junction treatment",
    "types": [
      {
        "name": "cycle facilities at traffic signals",
        "possible_measurements": [
          {
            "name": "ATE Junction Assessment Tool score",
            "unit": "%",
            "type": "contextual"
          },
          {
            "name": "number of junction arms",
            "unit": "arms",
            "type": "contextual"
          },
          {
            "name": "number of junctions",
            "unit": "junctions",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes advanced stop line",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes cycle and pedestrian only stage",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes cycle bypass",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes cycle gate",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes early release",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes hold the left",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes separate cycle phases",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes two-stage right turn",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "cycle optimised protected signals (CYCLOPS)",
        "possible_measurements": [
          {
            "name": "ATE Junction Assessment Tool score",
            "unit": "%",
            "type": "contextual"
          },
          {
            "name": "number of junction arms",
            "unit": "arms",
            "type": "contextual"
          },
          {
            "name": "number of junctions",
            "unit": "junctions",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Dutch-style roundabout",
        "possible_measurements": [
          {
            "name": "ATE Junction Assessment Tool score",
            "unit": "%",
            "type": "contextual"
          },
          {
            "name": "number of junction arms",
            "unit": "arms",
            "type": "contextual"
          },
          {
            "name": "number of junctions",
            "unit": "junctions",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "roundabout",
        "possible_measurements": [
          {
            "name": "ATE Junction Assessment Tool score",
            "unit": "%",
            "type": "contextual"
          },
          {
            "name": "number of junction arms",
            "unit": "arms",
            "type": "contextual"
          },
          {
            "name": "number of junctions",
            "unit": "junctions",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "tight entry/exit radii",
        "possible_measurements": [
          {
            "name": "ATE Junction Assessment Tool score",
            "unit": "%",
            "type": "contextual"
          },
          {
            "name": "number of junction arms",
            "unit": "arms",
            "type": "contextual"
          },
          {
            "name": "number of junctions",
            "unit": "junctions",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is signalised",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  "link_segment": {
    "group": "link segment",
    "types": [
      {
        "name": "cycle lane marked on road",
        "possible_measurements": [
          {
            "name": "highway lane width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "lane marking type",
                "valid_options": [
                  {
                    "option": "advisory cycle lane"
                  },
                  {
                    "option": "bus lane"
                  },
                  {
                    "option": "mandatory cycle lane"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "no cycling provision",
        "possible_measurements": [
          {
            "name": "highway lane width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "no equestrian provision",
        "possible_measurements": [
          {
            "name": "highway lane width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "no pedestrian provision",
        "possible_measurements": [
          {
            "name": "highway lane width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "pavement or footway",
        "possible_measurements": [
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "pavement width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "surface grip",
            "unit": "ptv",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "alongside carriageway",
            "possible_features": [
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by a buffer",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by a kerb",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "bound and porous"
                  },
                  {
                    "option": "bound and sealed"
                  },
                  {
                    "option": "paved with greater than 5mm joints"
                  },
                  {
                    "option": "paved with less than 5mm joints"
                  },
                  {
                    "option": "paved with mortared joints"
                  },
                  {
                    "option": "unbound or unsealed"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "bound and porous"
                  },
                  {
                    "option": "bound and sealed"
                  },
                  {
                    "option": "paved with greater than 5mm joints"
                  },
                  {
                    "option": "paved with less than 5mm joints"
                  },
                  {
                    "option": "paved with mortared joints"
                  },
                  {
                    "option": "unbound or unsealed"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "quiet link",
        "possible_measurements": [
          {
            "name": "highway lane width",
            "unit": "m",
            "type": "contextual"
          },
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "vehicle 85th percentile speed",
            "unit": "mph",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (daily)",
            "unit": "vpd",
            "type": "contextual"
          },
          {
            "name": "vehicle flow (peak hour)",
            "unit": "vph",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "segregated cycle track",
        "possible_measurements": [
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "track width",
            "unit": "m",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "alongside carriageway",
            "possible_features": [
              {
                "feature": "cyclist direction",
                "valid_options": [
                  {
                    "option": "bi-directional"
                  },
                  {
                    "option": "single direction"
                  }
                ]
              },
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has cyclist barriers causing dismount",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is at pavement level",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by a kerb",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by intermittent object placement",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is stepped up from carriageway",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "blocks"
                  },
                  {
                    "option": "hand-laid asphalt"
                  },
                  {
                    "option": "machine-laid asphalt"
                  },
                  {
                    "option": "unbound or unsealed"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "cyclist direction",
                "valid_options": [
                  {
                    "option": "bi-directional"
                  },
                  {
                    "option": "single direction"
                  }
                ]
              },
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has cyclist barriers causing dismount",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "blocks"
                  },
                  {
                    "option": "hand-laid asphalt"
                  },
                  {
                    "option": "machine-laid asphalt"
                  },
                  {
                    "option": "unbound or unsealed"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "shared use track",
        "possible_measurements": [
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "surface grip",
            "unit": "ptv",
            "type": "contextual"
          },
          {
            "name": "track width",
            "unit": "m",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "alongside carriageway",
            "possible_features": [
              {
                "feature": "cyclist direction",
                "valid_options": [
                  {
                    "option": "bi-directional"
                  },
                  {
                    "option": "single direction"
                  }
                ]
              },
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has cyclist barriers causing dismount",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by a buffer",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by a kerb",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is stepped up from carriageway",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "bound and porous"
                  },
                  {
                    "option": "bound and sealed"
                  },
                  {
                    "option": "unbound or unsealed"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "cyclist direction",
                "valid_options": [
                  {
                    "option": "bi-directional"
                  },
                  {
                    "option": "single direction"
                  }
                ]
              },
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "has cyclist barriers causing dismount",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "bound and porous"
                  },
                  {
                    "option": "bound and sealed"
                  },
                  {
                    "option": "unbound or unsealed"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "trotting strip",
        "possible_measurements": [
          {
            "name": "link segment length",
            "unit": "m",
            "type": "output"
          },
          {
            "name": "trotting strip width",
            "unit": "m",
            "type": "contextual"
          }
        ],
        "possible_contexts": [
          {
            "context": "alongside carriageway",
            "possible_features": [
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is at pavement level",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by a kerb",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is separated from carriageway by intermittent object placement",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "is stepped up from carriageway",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "side of road",
                "valid_options": [
                  {
                    "option": "left"
                  },
                  {
                    "option": "right"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "bound and porous"
                  },
                  {
                    "option": "bound and sealed"
                  },
                  {
                    "option": "grass"
                  }
                ]
              }
            ]
          },
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "cyclists expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "horses expected on link",
                "valid_options": [
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "lighting",
                "valid_options": [
                  {
                    "option": "bat-friendly lighting"
                  },
                  {
                    "option": "long stretches of darkness"
                  },
                  {
                    "option": "no lighting"
                  },
                  {
                    "option": "short stretches of darkness otherwise well-lit"
                  },
                  {
                    "option": "well-lit"
                  }
                ]
              },
              {
                "feature": "pedestrians expected on link",
                "valid_options": [
                  {
                    "option": "no"
                  }
                ]
              },
              {
                "feature": "surface type",
                "valid_options": [
                  {
                    "option": "bound and porous"
                  },
                  {
                    "option": "bound and sealed"
                  },
                  {
                    "option": "grass"
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  "modal_filter": {
    "group": "modal filter",
    "types": [
      {
        "name": "bollard / planter",
        "possible_measurements": [
          {
            "name": "number of modal filters",
            "unit": "modal filters",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "accessibility",
                "valid_options": [
                  {
                    "option": "accessible to wheelchair users"
                  },
                  {
                    "option": "inaccessible to wheelchair users"
                  }
                ]
              },
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "timing",
                "valid_options": [
                  {
                    "option": "at all times"
                  },
                  {
                    "option": "part time"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "bus / tram gate",
        "possible_measurements": [
          {
            "name": "number of modal filters",
            "unit": "modal filters",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "timing",
                "valid_options": [
                  {
                    "option": "at all times"
                  },
                  {
                    "option": "part time"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "camera restriction",
        "possible_measurements": [
          {
            "name": "number of modal filters",
            "unit": "modal filters",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "timing",
                "valid_options": [
                  {
                    "option": "at all times"
                  },
                  {
                    "option": "part time"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "school street",
        "possible_measurements": [
          {
            "name": "number of modal filters",
            "unit": "modal filters",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "timing",
                "valid_options": [
                  {
                    "option": "at all times"
                  },
                  {
                    "option": "part time"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "signed restriction",
        "possible_measurements": [
          {
            "name": "number of modal filters",
            "unit": "modal filters",
            "type": "output"
          }
        ],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "includes place-making: art",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: community garden",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: greening",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: landscaping",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: other",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: pocket park",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: social space",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "includes place-making: wayfinding",
                "valid_options": [
                  {
                    "option": "no"
                  },
                  {
                    "option": "yes"
                  }
                ]
              },
              {
                "feature": "timing",
                "valid_options": [
                  {
                    "option": "at all times"
                  },
                  {
                    "option": "part time"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "place-making": {
    "group": "place-making",
    "types": [
      {
        "name": "other place-making",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "social space",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "greening",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "art",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "pocket park",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "landscaping",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "wayfinding",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      },
      {
        "name": "community garden",
        "possible_measurements": [],
        "possible_contexts": [
          {
            "context": "unspecified",
            "possible_features": [
              {
                "feature": "None",
                "valid_options": []
              }
            ]
          }
        ]
      }
    ]
  }
}