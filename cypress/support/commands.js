// We are stubbing out the network request to simulate a failure to POST the
// users message to the server. Because Cypress only uses XHR and not Fetch
// we need to turn off the Fetch feature in the browser to that the polyfill
// falls back to use XHR. This lets us hijack the route with Cypress =)
// NOTE: Use `Cypress` instead of `cy` so this persists across all tests.
Cypress.on("window:before:load", win => {
  win.fetch = null;
});
