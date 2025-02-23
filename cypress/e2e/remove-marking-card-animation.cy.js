describe("Remove Marking - Fade right animation", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Will remove all cards and trigger fade out animation", () => {
        // Check initial state
        cy.get("#editor > p > .typo").should("not.exist");

        // Type some text
        cy.get('[data-test="editor"]').type("sakt eshte");

        // Wait for the button to appear
        cy.get('[data-test="dismiss-marking-button"]').should("be.visible");

        // Click the button for each card
        cy.get(".sticky .card").each((card, index) => {
            cy.wrap(card).find('[data-test="dismiss-marking-button"]').click();

            cy.wrap(card).should("not.exist");
        });
    });
});
