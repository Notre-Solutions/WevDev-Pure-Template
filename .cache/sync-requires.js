const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-components-js": hot(preferDefault(require("/Users/stephenkelehan/Dev/Websites/notre/templates/WevDev-Pure-Template/src/pages/components.js"))),
  "component---src-templates-about-js": hot(preferDefault(require("/Users/stephenkelehan/Dev/Websites/notre/templates/WevDev-Pure-Template/src/templates/about.js"))),
  "component---src-templates-contact-js": hot(preferDefault(require("/Users/stephenkelehan/Dev/Websites/notre/templates/WevDev-Pure-Template/src/templates/contact.js"))),
  "component---src-templates-download-js": hot(preferDefault(require("/Users/stephenkelehan/Dev/Websites/notre/templates/WevDev-Pure-Template/src/templates/download.js"))),
  "component---src-templates-landing-page-js": hot(preferDefault(require("/Users/stephenkelehan/Dev/Websites/notre/templates/WevDev-Pure-Template/src/templates/landing-page.js"))),
  "component---src-templates-pricing-js": hot(preferDefault(require("/Users/stephenkelehan/Dev/Websites/notre/templates/WevDev-Pure-Template/src/templates/pricing.js")))
}

