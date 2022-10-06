// tt-logintests-neg.spec
/// <reference types="cypress" />

import LoginPage from "../page-objects/tt-loginpage";

const loginPage = new LoginPage();

describe("Validation Messages", () => {
  beforeEach(() => {
    loginPage.gotoPageURL();
  });

  it("Shows correct msg - Empty username", () => {
    loginPage.enterUsername("m");
    loginPage.clearUsername();
    loginPage.enterPassword("test123");
    loginPage.checkMsgUsername("Please enter your username.");
  });

  it("Shows correct msg - Empty password", () => {
    loginPage.enterPassword("p");
    loginPage.clearPassword();
    loginPage.enterUsername("mistermagoo");
    loginPage.checkMsgPassword("Please enter your password.");
  });

  it("Shows correct msg - Disallowed characters in password", () => {
    loginPage.enterUsername("mistermagoo");
    loginPage.enterPassword("=?~");
    loginPage.checkMsgPassword(
      "Only letters, numbers, and these symbols are allowed"
    );
  });

  it("Shows correct msg - Disallowed characters in Username", () => {
    loginPage.enterUsername("=?~");
    // enterPassword('test123')
    loginPage.checkMsgUsername(
      "Only letters, numbers, hyphens, and underscores allowed."
    );
  });

  it("Shows correct msg - Bad username/password combination", () => {
    loginPage.enterUsername("DingoDog");
    loginPage.enterPassword("test123");
    loginPage.clickSubmit();
    loginPage.checkMsgBadUsernamePassCombo(
      "Double-check your username and password...then try again."
    );
  });

  /////

  it("Logs in and proceeds - After fixing username/password", () => {
    loginPage.enterUsername("DingoDog");
    loginPage.enterPassword("foo");
    loginPage.clickSubmit();
    loginPage.checkMsgBadUsernamePassCombo(
      "Double-check your username and password...then try again."
    );
    loginPage.clearUsername();
    loginPage.enterUsername("mistermagoo");
    loginPage.clearPassword();
    loginPage.enterPassword("test123");
    loginPage.clickSubmit();
  });

  it("Clears username/password - After successful login", () => {
    loginPage.enterUsername("mistermagoo");
    loginPage.clearPassword();
    loginPage.enterPassword("test123");
    loginPage.clickSubmit();
    loginPage.gotoPageURL();
  });
});
