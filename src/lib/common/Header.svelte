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

{#if appVersion() == "Public Beta dev environment" || appVersion() == "Public Beta test environment"}
  <p>
    <strong>
      NB, this is a testing environment. Should you be using
      <ExternalLink href="https://plan.activetravelengland.gov.uk/">
        plan.activetravelengland.gov.uk
      </ExternalLink>?
    </strong>
  </p>
{/if}

<div class="green-bar" />

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
