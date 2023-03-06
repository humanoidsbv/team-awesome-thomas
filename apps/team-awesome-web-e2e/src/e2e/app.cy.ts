import { getGreeting } from "../support/app.po";

describe("team-awesome-web", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login("my-email@something.com", "myPassword");

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains("Home");
  });
});

describe("Routing", () => {
  beforeEach(() => cy.visit("/"));

  it("Navigates to other pages", () => {
    const headerNav = cy.get("header");

    headerNav.get('[href="/team-members"]').click();

    headerNav.get('[href="/timesheets"]').click();
  });

  it("Navigates to other pages, but on mobile", () => {
    cy.viewport(375, 815);

    const headerNav = cy.get("header");
    const navButtonClick = () => headerNav.get('[data-cy="nav-button"]').click({ timeout: 1000 });

    navButtonClick();
    headerNav.get('[href="/team-members"]').click();

    navButtonClick();
    headerNav.get('[href="/timesheets"]').click();
  });
});
