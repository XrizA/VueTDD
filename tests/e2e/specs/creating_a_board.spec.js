describe("Creating a board", () => {
  it("Displays the board in the list", () => {
    cy.visit("#/dashboard");

    cy.get("[data-test='boardName']").type("Team5 Event Storming");

    cy.get("[data-test='sendButton']").click();

    cy.get("[data-test='boardName']").should("have.value", "");

    cy.contains("Team5 Event Storming").click();
  });
});
