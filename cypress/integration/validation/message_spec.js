import { SUBMIT_NODE, MESSAGE_NODE } from "../../helpers";
const INVALID_MESSAGE = "Please supply a message";

describe("name field validation", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should be invalid if submitted with no value", () => {
    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE);
  });

  it("should be valid if submitted with a value", () => {
    cy.get(MESSAGE_NODE).type("test");

    cy.get(SUBMIT_NODE).click();

    cy.contains(INVALID_MESSAGE).should("not.exist");
  });
});
