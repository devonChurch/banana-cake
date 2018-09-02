const SUBMIT_NODE = 'button[type="submit"]';
const NAME_NODE = 'input[name="Name"]';
const EMAIL_NODE = 'input[name="Email"]';
const MESSAGE_NODE = 'textarea[name="Message"]';

describe.only("unsuccessful completion", () => {
  it("inform the users that their message has not been sent successfully", () => {
    // We are stubbing out the network request to simulate a failure to POST the
    // users message to the server. Because Cypress only uses XHR and not Fetch
    // we need to turn off the Fetch feature in the browser to that the polyfill
    // falls back to use XHR. This lets us hijack the route with Cypress =)
    // NOTE: Use `Cypress` instead of `cy` so this persists across all tests.
    Cypress.on("window:before:load", win => {
      win.fetch = null;
    });

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

    cy.visit("/contact")
      .get(NAME_NODE)
      .type("test")
      .get(EMAIL_NODE)
      .type("test@test.com")
      .get(MESSAGE_NODE)
      .type("test")
      .get(SUBMIT_NODE)
      .click();

    cy.contains("Sorry, we have encountered an error");
    cy.get(SUBMIT_NODE).should("not.to.be.disabled");
  });
});
