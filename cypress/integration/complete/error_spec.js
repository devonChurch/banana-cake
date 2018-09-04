before(function() {
  // We are stubbing out the network request to simulate a failure to POST the
  // users message to the server. Because Cypress only uses XHR and not Fetch
  // we need to turn off the Fetch feature in the browser to that the polyfill
  // falls back to use XHR. This lets us hijack the route with Cypress =)
  // NOTE: Use `Cypress` instead of `cy` so this persists across all tests.
  Cypress.on("window:before:load", win => {
    win.fetch = null;
  });
});

describe("unsuccessful completion", function() {
  it("inform the users that their message has not been sent successfully", function() {
    cy.server({
      method: "POST",
      status: 500,
      response: {
        ok: false
      }
    });

    cy.route({
      url: new RegExp("(.*)/email-contact-form-alert")
    });

    cy.get("@nameNode")
      .type("test")
      .get("@emailNode")
      .type("test@test.com")
      .get("@messageNode")
      .type("test")
      .get("@submitNode")
      .click();

    cy.contains("Sorry, we have encountered an error");
    cy.get("@submitNode").should("not.to.be.disabled");
  });
});
