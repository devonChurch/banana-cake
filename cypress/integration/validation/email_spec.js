const INVALID_MESSAGE = "A valid Email address is required";

describe("email field validation", function() {
  it("should be invalid if submitted with no value", function() {
    cy.get("@submitNode").click();
    cy.contains(INVALID_MESSAGE);
  });

  it("should be invalid if submitted with an incorrect format", function() {
    cy.get("@emailNode").type("test.com");
    cy.get("@submitNode").click();
    cy.contains(INVALID_MESSAGE);
  });

  it("should be valid if submitted with a correct format", function() {
    cy.get("@emailNode").type("test@test.com");
    cy.get("@submitNode").click();
    cy.contains(INVALID_MESSAGE).should("not.exist");
  });
});
