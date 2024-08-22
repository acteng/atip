<script lang="ts">
  import logoUrl from "../../../assets/ate_logo.png?url";
</script>

<div class="header">
  <div class="black-bar">
    <div class="govuk-width-container">
      <img src={logoUrl} alt="Active Travel England logo" />
    </div>
  </div>

  <div class="green-bar" />
</div>

<style>
  .header {
    position: fixed;
    margin-top: 0px;
    margin-left: -8px;
    width: 100vw;
  }

  .black-bar {
    background: #0b0c0c;
    margin-top: -8px;
  }

  .green-bar {
    width: 150vw;
    border-bottom: 10px solid #007161;
  }

  img {
    height: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
