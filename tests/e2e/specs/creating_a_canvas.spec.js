describe("createing a canvas", () => {
  it("canvas", () => {
    cy.visit("#/board/1");

    cy.get("[data-test='canvas']");
  });
});
