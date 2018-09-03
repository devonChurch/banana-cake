describe("successful completion", function() {
  it("inform the users that their message has been successfully sent", function() {
    // NOTE: No need to stub out this network request as we need to verify that
    // our e2e tests with our Lambdas are working correctly. Remember that adding
    // "test" to the message field will result in the dev email account being
    // pinged and not the sales team =)
    cy.visit("/contact")
      .get("@nameNode")
      .type("test")
      .get("@emailNode")
      .type("test@test.com")
      .get("@messageNode")
      .type("test")
      .get("@submitNode")
      .click();

    cy.contains("Great, we will be in touch soon");
    cy.get("@submitNode").should("to.be.disabled");
  });
});
