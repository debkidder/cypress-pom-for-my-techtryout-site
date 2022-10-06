/// <reference types="cypress" />

class IndexPage {
  gotoSiteIndex() {
    cy.visit("https://techtryout.com/");
  }

  gotoPageUrl(pageUrl) {
    cy.visit(pageUrl);
  }

  clickImageGit() {
    cy.get("#image_git").scrollIntoView();
    cy.get("#image_git").click();
  }

  clickImageJava() {
    cy.get("#image_java").scrollIntoView();
    cy.get("#image_java").click();
  }

  clickImageLinux() {
    cy.get("#image_linux").scrollIntoView();
    cy.get("#image_linux").click();
  }

  checkPageTitle(expectedTitle) {
    cy.get("title").should("contain.text", expectedTitle);
  }

  clickMenuGit() {
    cy.get(".menu")
      .find("ul.active")
      .find("li")
      .find("a")
      .eq(1)
      .click({ force: true });
  }

  clickMenuJava() {
    cy.get(".menu")
      .find("ul.active")
      .find("li")
      .find("a")
      .eq(2)
      .click({ force: true });
  }

  clickMenuLinux() {
    cy.get(".menu")
      .find("ul.active")
      .find("li")
      .find("a")
      .eq(3)
      .click({ force: true });
  }
}
export default IndexPage;
