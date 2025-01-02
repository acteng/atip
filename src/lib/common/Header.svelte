<script lang="ts">
  import { WarningText } from "govuk-svelte";
  import { appVersion } from "lib/common";
  import logoUrl from "../../../assets/ate_logo.png?url";
  import ExternalLink from "./ExternalLink.svelte";
</script>

<div class="black-bar">
  <a href="index.html">
    <img src={logoUrl} alt="Active Travel England logo" />
  </a>
</div>

<div class="green-bar" />

{#if appVersion() != "Public Beta" && appVersion() != "Private (development)"}
  <WarningText>
    This is a development version of this tool. You probably want to use
    <ExternalLink href="https://plan.activetravelengland.gov.uk/">
      plan.activetravelengland.gov.uk
    </ExternalLink>.
  </WarningText>
{/if}

<style>
  .black-bar {
    background: #0b0c0c;
    margin-top: -1rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .green-bar {
    background: #007161;
    height: 10px;
    margin-left: -1rem;
    margin-right: -1rem;
  }

  img {
    height: 30px;
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
