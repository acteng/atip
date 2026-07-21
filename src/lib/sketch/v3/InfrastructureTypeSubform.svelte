<script lang="ts">
  import { Radio } from "govuk-svelte";
  import type {
    ContextDefinition,
    InfrastructureFeature,
    InfrastructureSubtype,
    Measurement,
    V3Intervention,
  } from "types";
  import { infrastructureFormInformation } from "./data";
  import FeatureSubform from "./FeatureSubform.svelte";
  import MeasureSubform from "./MeasureSubform.svelte";

  export let intervention: V3Intervention;
  const intervention_type_options: InfrastructureSubtype[] =
    intervention.intervention_type !== ""
      ? infrastructureFormInformation[intervention.intervention_type].types
      : [];

  function getSubtypeObject(
    subtype: string,
  ): InfrastructureSubtype | undefined {
    const filteredTypeOptions = intervention_type_options.filter(
      (type_options) => {
        return type_options.name === subtype;
      },
    );

    if (filteredTypeOptions.length < 1) {
      return undefined;
    }

    return filteredTypeOptions[0];
  }

  function formatForRadio(original: string): [string, string] {
    const substrings: string[] = original.split("_");
    const capitalisedSubsstrings: string[] = [];
    substrings.forEach((uncapitalised) => {
      const capitalised: string =
        uncapitalised.slice(0, 1).toUpperCase() + uncapitalised.slice(1);
      capitalisedSubsstrings.push(capitalised);
    });
    return [original, capitalisedSubsstrings.join(" ")];
  }

  const subtypes: [string, string][] = intervention_type_options.map(
    (type_options) => {
      return formatForRadio(type_options.name);
    },
  );

  $: subtypeObject = getSubtypeObject(
    intervention.properties.intervention_subtype,
  );

  function getContextObject(context: string): ContextDefinition | undefined {
    let subtypeObject = getSubtypeObject(
      intervention.properties.intervention_subtype,
    );
    if (subtypeObject && subtypeObject.possible_contexts) {
      const contextObjectsFiltered = subtypeObject.possible_contexts?.filter(
        (contextObject) => {
          return contextObject.context === context;
        },
      );
      if (contextObjectsFiltered.length === 1) {
        return contextObjectsFiltered[0];
      }
    }
    return undefined;
  }

  $: contextObject = getContextObject(intervention.properties.context);

  $: contexts = subtypeObject
    ? subtypeObject.possible_contexts?.map((contextObject) => {
        return formatForRadio(contextObject.context);
      })
    : [];

  $: {
    pruneAndAddFeatures(
      intervention.properties.intervention_subtype,
      intervention.properties.context,
    );
    pruneAndAddMeasurements(intervention.properties.intervention_subtype);
  }

  function pruneAndAddFeatures(subtype: string, context: string) {
    const subtypeObject = getSubtypeObject(subtype);
    const contextObject = getContextObject(context);

    if (subtypeObject && contextObject && contextObject.possible_features) {
      if (!intervention.properties.features) {
        intervention.properties.features = [];
      }
      const newFeatures: InfrastructureFeature[] = [];

      contextObject.possible_features.forEach((featureObject) => {
        const indexInExistingList = intervention.properties.features.findIndex(
          (infrastructureFeature) => {
            return infrastructureFeature.name == featureObject.feature;
          },
        );
        newFeatures.push(
          indexInExistingList !== -1
            ? intervention.properties.features[indexInExistingList]
            : {
                name: featureObject.feature,
                value: "",
              },
        );
      });

      intervention.properties.features = newFeatures;
    }
  }

  function pruneAndAddMeasurements(subtype: string) {
    const subtypeObject = getSubtypeObject(subtype);

    if (subtypeObject && subtypeObject.possible_measurements) {
      if (!intervention.properties.features) {
        intervention.properties.features = [];
      }
      const newMeasurements: Measurement[] = [];

      subtypeObject.possible_measurements.forEach((featureMeasurement) => {
        const indexInExistingList =
          intervention.properties.measurements.findIndex(
            (infrastructureMeasurement) => {
              return infrastructureMeasurement.name == featureMeasurement.name;
            },
          );
        newMeasurements.push(
          indexInExistingList !== -1
            ? intervention.properties.measurements[indexInExistingList]
            : {
                name: featureMeasurement.name,
                unit: featureMeasurement.unit,
              },
        );
      });

      intervention.properties.measurements = newMeasurements;
    }
  }
</script>

<Radio
  label={"Intervention Subtype"}
  choices={subtypes}
  bind:value={intervention.properties.intervention_subtype}
/>
<Radio
  label={"Context"}
  choices={contexts}
  bind:value={intervention.properties.context}
/>
{#if subtypeObject && subtypeObject.possible_measurements}
  <h2>Measures</h2>
  {#each subtypeObject.possible_measurements as _measureObject, index}
    <MeasureSubform
      bind:interventionMeasure={intervention.properties.measurements[index]}
    />
  {/each}
{/if}
{#if contextObject && contextObject.possible_features}
  <h2>Features</h2>
  {#each contextObject.possible_features as featureObject, index}
    <FeatureSubform
      featureOptions={featureObject.valid_options.map((option) => {
        return formatForRadio(option.option);
      })}
      bind:interventionFeature={intervention.properties.features[index]}
    />
  {/each}
{/if}
