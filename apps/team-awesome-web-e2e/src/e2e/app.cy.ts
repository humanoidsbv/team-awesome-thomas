import { getGreeting } from "../support/app.po";

describe("team-awesome-web", () => {
  beforeEach(() => cy.visit("/"));

  it("Should display welcome message", () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login("my-email@something.com", "myPassword");

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains("Home");
  });
});

describe("Routing", () => {
  beforeEach(() => cy.visit("/"));

  const teamMembersUrl = "/team-members";
  const timeEntriesUrl = "/timesheets";

  it("Navigates to other pages", () => {
    cy.get("header").get(`[href="${teamMembersUrl}"]`).click();
    cy.url().should("include", teamMembersUrl);

    cy.get("header").get(`[href="${timeEntriesUrl}"]`).click();
    cy.url().should("include", timeEntriesUrl);
  });

  it("Navigates to other pages, but on mobile", () => {
    cy.viewport(375, 815);

    cy.get("header").get('[data-cy="nav-button"]').click();
    cy.get("header").get(`[href="${teamMembersUrl}"]`).click();
    cy.url().should("include", teamMembersUrl);

    cy.get("header").get('[data-cy="nav-button"]').click();
    cy.get("header").get(`[href="${timeEntriesUrl}"]`).click();
    cy.url().should("include", timeEntriesUrl);
  });
});
