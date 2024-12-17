<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { Footer } from "govuk-svelte";
  import { Beta, Header } from "lib/common";
  import { onMount } from "svelte";

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();
  });
</script>

<div class="govuk-width-container govuk-prose">
  <Header />
  <Beta />

  <h1 style="margin-top: 30px">
    Plan Your Active Travel Schemes Accessibility Statement
  </h1>

  <p>
    This accessibility statement applies to the Plan Your Active Travel Schemes
    tool, which is for sketching and viewing active travel schemes at various
    stages of the bidding and development process.
  </p>
  <p>
    This website is run by Active Travel England. It requires use of and
    interactions with maps.
  </p>
  <ul>
    <li>
      We include multiple options for basemap, allowing the user to decide what
      works best for them
    </li>
    <li>
      We intend to add user-configurable colour choices for map layers such as
      boundaries, sketched schemes and trip generators
    </li>
    <li>
      <a href="https://mcmw.abilitynet.org.uk/">AbilityNet</a>
       has advice on making your device easier to use if you have a disability
    </li>
  </ul>

  <h2>How accessible this website is</h2>

  <p>We know some parts of the website are not fully accessible:</p>
  <p>
    This website is run by Active Travel England. It requires use of and
    interactions with maps.
  </p>
  <ul>
    <li>You cannot navigate most of the website using just a keyboard</li>
    <li>
      You cannot navigate most of the website using speech recognition software
    </li>
    <li>
      You cannot listen to most of the website using a screen reader (including
      the most recent versions of JAWS, NVDA and VoiceOver)
    </li>
    <li>
      Colour will be used to convey information such as road width and speed
      limits, until this is configurable it might present an accessibility
      issue.
    </li>
  </ul>

  <h2>Feedback and contact information</h2>
  <p>
    If you need information on this app or to provide further feedback on issues
    please email <a
      href="mailto:plan-your-active-travel-schemes@activetravelengland.gov.uk"
    >
      plan-your-active-travel-schemes@activetravelengland.gov.uk
    </a>
    . We’ll consider your request and get back to you in 20 days.
  </p>

  <h2>Enforcement procedure</h2>
  <p>
    The Equality and Human Rights Commission (EHRC) is responsible for enforcing
    the Public Sector Bodies (Websites and Mobile Applications) (No. 2)
    Accessibility Regulations 2018 (the ‘accessibility regulations’). If you’re
    not happy with how we respond to your complaint, <a
      href="https://www.equalityadvisoryservice.com/"
    >
      contact the Equality Advisory and Support Service (EASS)
    </a>
    .
  </p>

  <h2>Technical information about this website’s accessibility</h2>
  <p>
    Active Travel England is committed to making its website accessible, in
    accordance with the Public Sector Bodies (Websites and Mobile Applications)
    (No. 2) Accessibility Regulations 2018.
  </p>

  <h2>Compliance status</h2>
  <p>
    This website is not compliant with the Web Content Accessibility Guidelines
    version 2.2 AA standard, due to the non-compliances listed below.
  </p>
  <ul>
    <li>
      The map information is necessarily visual and it cannot be converted into
      text content
    </li>
    <li>
      Similarly many interactions with the map cannot be performed by keyboard
      only
    </li>
    <li>
      Certain interactions with sketching require dragging with mouse or touch
      pad
    </li>
  </ul>

  <h2>Non-compliance with the accessibility regulations</h2>
  <p>
    Navigation and accessing information: We use a map to provide proposed
    infrastructure schemes to visually help ATE teams assess schemes. This is
    not used for navigational purposes.
  </p>

  <h2>Preparation of this accessibility statement</h2>
  <p>
    This statement was prepared on 24th September 2024. We did an internal audit
    against WCAG guidelines.
  </p>
</div>

<Footer
  aboutHref="about.html"
  privacyHref="privacy.html"
  accessibilityHref="accessibility.html"
/>
