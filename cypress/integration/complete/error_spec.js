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
