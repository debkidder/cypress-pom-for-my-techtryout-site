// tt-logintests-pos.spec
/// <reference types="cypress" />

import LoginPage from "../page-objects/tt-loginpage";

const loginPage = new LoginPage();

const goodUsername = Cypress.env("username");
const goodPassword = Cypress.env("password");

describe("Successful login", () => {
  beforeEach(() => {
    loginPage.gotoPageURL();
  });

  it("Logs in successfully - Correct username and password", () => {
    loginPage.enterUsername(goodUsername);
    loginPage.enterPassword(goodPassword);
    loginPage.clickSubmit();
  });

  it("Logs in successfully - Mixed-case username", () => {
    loginPage.enterUsername("misterMAGOO");
    loginPage.enterPassword(goodPassword);
    loginPage.clickSubmit();
  });
});
