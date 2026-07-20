import type { InfrastructureTaxonomyObject } from "types";

export const infrastructureFormInformation: InfrastructureTaxonomyObject = {
  crossing: {
    group: "crossing",
    types: [
      {
        name: "marked priority",
        possible_measurements: [
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "number of lanes crossed",
            unit: "lanes",
            type: "contextual",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "at side-road",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is continuous footway",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "junction has tight radii",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "pedestrians have priority over traffic",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "permitted movements at side-road junctions",
                valid_options: [
                  {
                    option: "entry and exit",
                  },
                  {
                    option: "entry only",
                  },
                  {
                    option: "exit only",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "stand-alone",
            possible_features: [
              {
                feature: "fulfils routing desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "fulfils single movement desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "pedestrians have priority over traffic",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "provides connection to bus stop",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "pedestrians have priority over traffic",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "parallel zebra",
        possible_measurements: [
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "at side-road",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is continuous footway",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "junction has tight radii",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "permitted movements at side-road junctions",
                valid_options: [
                  {
                    option: "entry and exit",
                  },
                  {
                    option: "entry only",
                  },
                  {
                    option: "exit only",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "stand-alone",
            possible_features: [
              {
                feature: "fulfils routing desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "fulfils single movement desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "provides connection to bus stop",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "ped-x",
        possible_measurements: [
          {
            name: "crossing speed",
            unit: "mps",
            type: "contextual",
          },
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "user wait time",
            unit: "s",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by audio",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by rotating cone",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by visual aids",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "pegasus",
        possible_measurements: [
          {
            name: "crossing speed",
            unit: "mps",
            type: "contextual",
          },
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "user wait time",
            unit: "s",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by audio",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by rotating cone",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by visual aids",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "pelican",
        possible_measurements: [
          {
            name: "crossing speed",
            unit: "mps",
            type: "contextual",
          },
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "user wait time",
            unit: "s",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by audio",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by rotating cone",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by visual aids",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "puffin",
        possible_measurements: [
          {
            name: "crossing speed",
            unit: "mps",
            type: "contextual",
          },
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "user wait time",
            unit: "s",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by audio",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by rotating cone",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by visual aids",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "sparrow",
        possible_measurements: [
          {
            name: "crossing speed",
            unit: "mps",
            type: "contextual",
          },
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "user wait time",
            unit: "s",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by audio",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by rotating cone",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by visual aids",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "toucan",
        possible_measurements: [
          {
            name: "crossing speed",
            unit: "mps",
            type: "contextual",
          },
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "user wait time",
            unit: "s",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by audio",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by rotating cone",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "safe to cross indicated by visual aids",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "uncontrolled",
        possible_measurements: [
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "number of lanes crossed",
            unit: "lanes",
            type: "contextual",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "stand-alone",
            possible_features: [
              {
                feature: "fulfils routing desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "fulfils single movement desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "provides connection to bus stop",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "zebra",
        possible_measurements: [
          {
            name: "number of crossings",
            unit: "crossings",
            type: "output",
          },
          {
            name: "refuge width",
            unit: "m",
            type: "contextual",
          },
          {
            name: "vehicle 85th percentile speed",
            unit: "mph",
            type: "contextual",
          },
          {
            name: "vehicle flow (daily)",
            unit: "vpd",
            type: "contextual",
          },
          {
            name: "vehicle flow (peak hour)",
            unit: "vph",
            type: "contextual",
          },
        ],
        possible_contexts: [
          {
            context: "at side-road",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is continuous footway",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "junction has tight radii",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "permitted movements at side-road junctions",
                valid_options: [
                  {
                    option: "entry and exit",
                  },
                  {
                    option: "entry only",
                  },
                  {
                    option: "exit only",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "stand-alone",
            possible_features: [
              {
                feature: "fulfils routing desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "fulfils single movement desire line",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "provides connection to bus stop",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
          {
            context: "unspecified",
            possible_features: [
              {
                feature: "has buildout",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has dropped kerbs",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has pedestrian refuge",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has raised table",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "has tactile paving",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: art",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: community garden",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: greening",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: landscaping",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: other",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: pocket park",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: social space",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "includes place-making: wayfinding",
                valid_options: [
                  {
                    option: "no",
                  },
                  {
                    option: "yes",
                  },
                ],
              },
              {
                feature: "is signalised",
                valid_options: [
                  {
                    option: "no",
                  },
                ],
              },
              {
                feature: "setback from junction",
                valid_options: [
                  {
                    option: "fully setback",
                  },
                  {
                    option: "not setback",
                  },
                  {
                    option: "partially setback",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
