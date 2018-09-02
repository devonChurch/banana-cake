import { SUBMIT_NODE, NAME_NODE } from "../../helpers";
const INVALID_MESSAGE = "Please supply a contact name";

describe("name field validation", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should be invalid if submitted with no value", () => {
    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE);
  });

  it("should be valid if submitted with a value", () => {
    cy.get(NAME_NODE).type("test");

    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE).should("not.exist");
  });
});
