const INVALID_MESSAGE = "Please supply a message";

describe("name field validation", function() {
  it("should be invalid if submitted with no value", function() {
    cy.get("@submitNode").click();
    cy.contains(INVALID_MESSAGE);
  });

  it("should be valid if submitted with a value", function() {
    cy.get("@messageNode").type("test");
    cy.get("@submitNode").click();
    cy.contains(INVALID_MESSAGE).should("not.exist");
  });
});
