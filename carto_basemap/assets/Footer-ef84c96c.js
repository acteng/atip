import{S as A,i as C,s as L,e as _,a as g,d as a,f as k,g as u,q as h,k as m,t as d}from"./index-eeb19009.js";function b(n){let e,i,f,o,l=n[0]&&p(n),c=n[1]&&w(n),r=n[2]&&H(n),t=n[3]&&y(n);return{c(){e=_("ul"),l&&l.c(),i=g(),c&&c.c(),f=g(),r&&r.c(),o=g(),t&&t.c(),a(e,"class","govuk-footer__inline-list")},m(s,v){k(s,e,v),l&&l.m(e,null),u(e,i),c&&c.m(e,null),u(e,f),r&&r.m(e,null),u(e,o),t&&t.m(e,null)},p(s,v){s[0]?l?l.p(s,v):(l=p(s),l.c(),l.m(e,i)):l&&(l.d(1),l=null),s[1]?c?c.p(s,v):(c=w(s),c.c(),c.m(e,f)):c&&(c.d(1),c=null),s[2]?r?r.p(s,v):(r=H(s),r.c(),r.m(e,o)):r&&(r.d(1),r=null),s[3]?t?t.p(s,v):(t=y(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&m(e),l&&l.d(),c&&c.d(),r&&r.d(),t&&t.d()}}}function p(n){let e,i,f;return{c(){e=_("li"),i=_("a"),f=d("About"),a(i,"class","govuk-footer__link"),a(i,"href",n[0]),a(e,"class","govuk-footer__inline-list-item")},m(o,l){k(o,e,l),u(e,i),u(i,f)},p(o,l){l&1&&a(i,"href",o[0])},d(o){o&&m(e)}}}function w(n){let e,i,f;return{c(){e=_("li"),i=_("a"),f=d("Privacy"),a(i,"class","govuk-footer__link"),a(i,"href",n[1]),a(e,"class","govuk-footer__inline-list-item")},m(o,l){k(o,e,l),u(e,i),u(i,f)},p(o,l){l&2&&a(i,"href",o[1])},d(o){o&&m(e)}}}function H(n){let e,i,f;return{c(){e=_("li"),i=_("a"),f=d("Accessibility"),a(i,"class","govuk-footer__link"),a(i,"href",n[2]),a(e,"class","govuk-footer__inline-list-item")},m(o,l){k(o,e,l),u(e,i),u(i,f)},p(o,l){l&4&&a(i,"href",o[2])},d(o){o&&m(e)}}}function y(n){let e,i,f;return{c(){e=_("li"),i=_("a"),f=d("Cookies"),a(i,"class","govuk-footer__link"),a(i,"href",n[3]),a(e,"class","govuk-footer__inline-list-item")},m(o,l){k(o,e,l),u(e,i),u(i,f)},p(o,l){l&8&&a(i,"href",o[3])},d(o){o&&m(e)}}}function M(n){let e,i,f,o,l,c,r,t=n[4]&&b(n);return{c(){e=_("footer"),i=_("div"),f=_("div"),t&&t.c(),o=g(),l=_("div"),l.innerHTML=`<svg aria-hidden="true" focusable="false" class="govuk-footer__licence-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7" height="17" width="41"><path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"></path></svg> <span class="govuk-footer__licence-description">All content is available under the
          <a class="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>
          , except where otherwise stated</span>`,c=g(),r=_("div"),r.innerHTML='<a class="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">© Crown copyright</a>',a(l,"class","govuk-footer__meta-item govuk-footer__meta-item--grow"),a(r,"class","govuk-footer__meta-item"),a(f,"class","govuk-footer__meta"),a(i,"class","govuk-width-container"),a(e,"class","govuk-footer")},m(s,v){k(s,e,v),u(e,i),u(i,f),t&&t.m(f,null),u(f,o),u(f,l),u(f,c),u(f,r)},p(s,[v]){s[4]?t?t.p(s,v):(t=b(s),t.c(),t.m(f,o)):t&&(t.d(1),t=null)},i:h,o:h,d(s){s&&m(e),t&&t.d()}}}function S(n,e,i){let f,{aboutHref:o=void 0}=e,{privacyHref:l=void 0}=e,{accessibilityHref:c=void 0}=e,{cookiesHref:r=void 0}=e;return n.$$set=t=>{"aboutHref"in t&&i(0,o=t.aboutHref),"privacyHref"in t&&i(1,l=t.privacyHref),"accessibilityHref"in t&&i(2,c=t.accessibilityHref),"cookiesHref"in t&&i(3,r=t.cookiesHref)},n.$$.update=()=>{n.$$.dirty&15&&i(4,f=o||l||c||r)},[o,l,c,r,f]}class z extends A{constructor(e){super(),C(this,e,S,M,L,{aboutHref:0,privacyHref:1,accessibilityHref:2,cookiesHref:3})}}export{z as F};
