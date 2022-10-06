/// <reference types="cypress" />

import IndexPage from "../page-objects/tt-indexpage";

const indexPage = new IndexPage();

describe("Basic navigation", () => {
  beforeEach(() => {
    indexPage.gotoSiteIndex();
  });

  it("Navigates to Git Basics - From Index page Git image", () => {
    indexPage.clickImageGit();
    indexPage.checkPageTitle("Git Basics");
  });

  it("Navigates to Java Basics - From Index page Java image", () => {
    indexPage.clickImageJava();
    indexPage.checkPageTitle("Java Basics");
  });

  it("Navigates to Linux Basics - From Index page Linux image", () => {
    indexPage.clickImageLinux();
    indexPage.checkPageTitle("Linux Basics");
  });

  it("Loads test pages", () => {
    indexPage.gotoPageUrl("https://www.techtryout.com/testing_example.html");
    indexPage.checkPageTitle("Try Out Testing");
    indexPage.gotoPageUrl("https://www.techtryout.com/testing_basics.html");
    indexPage.checkPageTitle("Testing Basics");
    indexPage.gotoPageUrl("https://www.techtryout.com/testing_documents.html");
    indexPage.checkPageTitle("Test Documents");
  });

  it("Navigates with  topnav menu - Java Basics to Linux Basics", () => {
    indexPage.gotoPageUrl("https://www.techtryout.com/java_basics.html");
    indexPage.clickMenuLinux();
    indexPage.checkPageTitle("Linux Basics");
  });

  it("Navigates with topnav menu - Git Basics to Java Basics", () => {
    indexPage.gotoPageUrl("https://www.techtryout.com/git_basics.html");
    indexPage.clickMenuJava();
    indexPage.checkPageTitle("Java Basics");
  });
  it("Navigates using topnav menu - Index page to Git Basics", () => {
    indexPage.clickMenuGit();
    indexPage.checkPageTitle("Git Basics");
  });
});
