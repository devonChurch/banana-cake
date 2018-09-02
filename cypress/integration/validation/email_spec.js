const SUBMIT_NODE = 'button[type="submit"]';
const EMAIL_NODE = 'input[name="Email"]';
const INVALID_MESSAGE = "A valid Email address is required";

describe("email field validation", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should be invalid if submitted with no value", () => {
    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE);
  });

  it("should be invalid if submitted with an incorrect format", () => {
    cy.get(EMAIL_NODE).type("test.com");

    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE);
  });

  it("should be valid if submitted with a correct format", () => {
    cy.get(EMAIL_NODE).type("test@test.com");

    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE).should("not.exist");
  });
});
