<script lang="ts">
  import logoUrl from "../../../assets/ate_logo.png?url";
  import { appVersion } from "lib/common";
  import ExternalLink from "./ExternalLink.svelte";
</script>

<div class="black-bar">
  <a href="index.html">
    <img src={logoUrl} alt="Active Travel England logo" />
  </a>
</div>

<div class="green-bar" />

{#if appVersion() != "Public Beta" && appVersion() != "Private (development)"}
  <p class="test-env-warning">
    <strong>
      <span style="color:red;">
        NB this is a testing environment. 
      </span>
      Should you be using
      <ExternalLink href="https://plan.activetravelengland.gov.uk/">
        plan.activetravelengland.gov.uk
      </ExternalLink>?
    </strong>
  </p>
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

  .test-env-warning {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
</style>
