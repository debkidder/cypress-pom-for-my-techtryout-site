/// <reference types="cypress" />

class LoginPage {
  gotoPageURL() {
    cy.visit("https://techtryout.com/testing_loginpage.html");
  }

  enterUsername(usernameText) {
    cy.get("#username").type(usernameText);
  }

  enterPassword(passwordText) {
    cy.get("#password").type(passwordText);
  }

  clickSubmit() {
    cy.get("#login").click();
  }

  clearUsername() {
    cy.get("#username").focus().clear();
  }

  clearPassword() {
    cy.get("#password").focus().clear();
  }

  checkMsgUsername(expectedMsgText) {
    const valMsg = cy.get(".validation");
    valMsg.should("be.visible");
    valMsg.should("contain.text", expectedMsgText);
  }

  checkMsgPassword(expectedMsgText) {
    const valMsg = cy.get(".validation");
    valMsg.should("be.visible");
    valMsg.should("contain.text", expectedMsgText);
  }

  checkMsgBadUsernamePassCombo(expectedMsgText) {
    const valMsg = cy.get(".validation");
    valMsg.should("be.visible");
    valMsg.should("contain.text", expectedMsgText);
  }

  checkLoginSuccess(expectedMsgText) {
    const valMsg = cy.get(".validation");
    valMsg.should("be.visible");
    valMsg.should("contain.text", expectedMsgText);
  }

  checkNextPage(expectedHeading) {
    const h1TryOutTestingPage = cy.get("h1");
    h1TryOutTestingPage.should("contain.text", expectedHeading);
  }
}
export default LoginPage;
