// tt-basicnavigation.spec
/// <reference types="cypress" />

import {
    gotoSiteIndex,
    gotoPageUrl,
    clickImageGit,
    clickImageJava,
    clickImageLinux,
    checkPageTitle,
    clickMenuGit,
    clickMenuJava,
    clickMenuLinux
  } from '../page-objects/tt-indexpage'


describe('Basic navigation', () => {
    beforeEach(() => {
    gotoSiteIndex()
    })

    it('Navigates to Git Basics - From Index page Git image', () => {
        clickImageGit()
        checkPageTitle('Git Basics')
    })

    it('Navigates to Java Basics - From Index page Java image', () => {
        clickImageJava()
        checkPageTitle('Java Basics')
    })

    it('Navigates to Linux Basics - From Index page Linux image', () => {
        clickImageLinux()
        checkPageTitle('Linux Basics')
    })

    it('Loads test pages', () => {
        gotoPageUrl('https://www.techtryout.com/testing_example.html')
        checkPageTitle('Try Out Testing')
        gotoPageUrl('https://www.techtryout.com/testing_basics.html')
        checkPageTitle('Testing Basics')
        gotoPageUrl('https://www.techtryout.com/testing_documents.html')
        checkPageTitle('Test Documents')
    })


    it('Navigates with  topnav menu - Java Basics to Linux Basics', () => {
        gotoPageUrl('https://www.techtryout.com/java_basics.html')
        clickMenuLinux()
        checkPageTitle('Linux Basics')
    })
    
    it('Navigates with topnav menu - Git Basics to Java Basics', () => {
        gotoPageUrl('https://www.techtryout.com/git_basics.html')
        clickMenuJava()
        checkPageTitle('Java Basics')
    })
    it('Navigates using topnav menu - Index page to Git Basics', () => {
        clickMenuGit()
        checkPageTitle('Git Basics')
    })
        
}) 