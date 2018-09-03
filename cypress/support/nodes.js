beforeEach(function() {
  // runs once before all tests in the block
  cy.visit("/contact");

  cy.get('button[type="submit"]').as("submitNode");
  cy.get('input[name="Name"]').as("nameNode");
  cy.get('input[name="Email"]').as("emailNode");
  cy.get('textarea[name="Message"]').as("messageNode");
});
