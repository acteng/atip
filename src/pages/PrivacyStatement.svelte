<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { Beta, Header, ExternalLink } from "lib/common";
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
    Plan Your Active Travel Schemes Privacy Statement
  </h1>
  <h2>Introduction</h2>

  <p>
    Plan Your Active Travel Schemes is an 
    <ExternalLink href="https://github.com/acteng/atip">
      open source project
    </ExternalLink>
    supported by Active Travel England. The service allows you to sketch active travel
    schemes at a high level and produces GeoJSON files that can be shared with others
    using this tool or imported into other GIS software.
  </p>

  <h2>What data we are collecting and how we will use it</h2>

  <p>
    Most of the data handled by the tool is your sketches. These are stored in
    your browser's local storage and not sent over the network. Since it is not
    personal data it will not be discussed further in this statement.
  </p>
  <p>We are processing the following personal data:</p>
  <ul>
    <li>Your IP address</li>
  </ul>
  <p>
    Personal data is required to collect server-side logs to track usage and
    comply with auditing and security requirements.
  </p>

  <h2>Our lawful basis for collecting your data</h2>
  <p>
    Under data protection law, the lawful basis for processing your data is:
  </p>

  <p>
    <ExternalLink
      href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/public-task/"
    >
      Article 6(1)(e)
    </ExternalLink>
     – public interest
  </p>
  <p>
    Processing is necessary for the performance of a task carried out in the
    public interest or in the exercise of official authority vested in the
    controller.
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

  <h2>Data sharing</h2>
  <p>
    This tool uses MapTiler, an external service, for hosting maps and location
    search; here is their statement about 
    <ExternalLink href="https://documentation.maptiler.com/hc/en-us/articles/4405446306961-Personal-data-in-MapTiler-Cloud/">
      personal data
    </ExternalLink>.
  </p>

  <h2>How long we retain the data</h2>
  <p>
    Your personal data will be kept securely by DfT and deleted after 1 year.
  </p>

  <h2>Further information</h2>
  <p>
    For more information about your rights in relation to your personal data,
    how to complain or how to contact the DfT Data Protection Officer, view our 
    <ExternalLink
      href="https://www.gov.uk/government/organisations/active-travel-england/about/personal-information-charter"
    >
      Personal Information Charter
    </ExternalLink>.
  </p>
</div>
