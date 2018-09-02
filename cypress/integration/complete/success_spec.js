const SUBMIT_NODE = 'button[type="submit"]';
const NAME_NODE = 'input[name="Name"]';
const EMAIL_NODE = 'input[name="Email"]';
const MESSAGE_NODE = 'textarea[name="Message"]';

describe("successful completion", () => {
  it("inform the users that their message has been successfully sent", () => {
    // NOTE: No need to stub out this network request as we need to verify that
    // our e2e tests with our Lambdas are working correctly. Remember that adding
    // "test" to the message field will result in the dev email account being
    // pinged and not the sales team =)
    cy.visit("/contact")
      .get(NAME_NODE)
      .type("test")
      .get(EMAIL_NODE)
      .type("test@test.com")
      .get(MESSAGE_NODE)
      .type("test")
      .get(SUBMIT_NODE)
      .click();

    cy.contains("Great, we will be in touch soon");
    cy.get(SUBMIT_NODE).should("to.be.disabled");
  });
});
