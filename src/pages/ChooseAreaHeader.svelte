<script lang="ts">
  // This differs from lib/common/Header, because the margins to override are different.
  import logoUrl from "../../assets/ate_logo.png?url";
</script>

<div class="black-bar">
  <img src={logoUrl} alt="Active Travel England logo" />
</div>

<div class="green-bar" />

<style>
  .black-bar {
    background: #0b0c0c;
    /* Fill the padding from govuk-grid-column-one-half */
    margin-right: -15px;
  }

  .green-bar {
    background: #007161;
    height: 10px;
    /* Fill the padding from govuk-grid-column-one-half */
    margin-right: -15px;
  }

  img {
    height: 30px;
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
