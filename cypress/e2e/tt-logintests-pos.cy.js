// tt-logintests-pos.spec
/// <reference types="cypress" />

import LoginPage from "../page-objects/tt-loginpage";

const loginPage = new LoginPage();

describe("Successful login", () => {
  beforeEach(() => {
    loginPage.gotoPageURL();
  });

  it("Logs in successfully - Correct username and password", () => {
    loginPage.enterUsername("mistermagoo");
    loginPage.enterPassword("test123");
    loginPage.clickSubmit();
  });

  it("Logs in successfully - Mixed-case username", () => {
    loginPage.enterUsername("misterMAGOO");
    loginPage.enterPassword("test123");
    loginPage.clickSubmit();
  });
});
