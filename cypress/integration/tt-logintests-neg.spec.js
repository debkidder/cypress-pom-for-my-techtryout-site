// tt-logintests-neg.spec
/// <reference types="cypress" />

import {
    gotoPageURL,
    enterUsername,
    enterPassword,
    clearUsername,
    clearPassword,
    clickSubmit,
    checkMsgUsername,
    checkMsgPassword,
    checkMsgBadUsernamePassCombo,
    checkNextPage
  } from '../page-objects/tt-loginpage'


describe('Validation Messages', () => {
    beforeEach(() => {
        gotoPageURL()
    })

    it('Shows correct msg - Empty username', () => {
        enterUsername('m')
        clearUsername()
        enterPassword('test123')
        checkMsgUsername('Please enter your username.')
    })

    it('Shows correct msg - Empty password', () => {
        enterPassword('p')
        clearPassword()
        enterUsername('mistermagoo')
        checkMsgPassword('Please enter your password.')
    })

    it('Shows correct msg - Disallowed characters in password', () => {
        enterUsername('mistermagoo')
        enterPassword('=?~')
        checkMsgPassword('Only letters, numbers, and these symbols are allowed')
    })

    it('Shows correct msg - Disallowed characters in Username', () => {

        enterUsername('=?~')
        // enterPassword('test123')
        checkMsgUsername('Only letters, numbers, hyphens, and underscores allowed.')
    })



    it('Shows correct msg - Bad username/password combination', () => {
        enterUsername('DingoDog')
        enterPassword('test123')
        clickSubmit()
        checkMsgBadUsernamePassCombo("Double-check your username and password...then try again.")
    })

    /////
    
    it('Logs in and proceeds - After fixing username/password', () => {
        enterUsername('DingoDog')
        enterPassword('foo')
        clickSubmit()
        checkMsgBadUsernamePassCombo("Double-check your username and password...then try again.")
        clearUsername()
        enterUsername('mistermagoo')
        clearPassword()
        enterPassword('test123')
        clickSubmit()
    })

    it('Clears username/password - After successful login', () => {
        enterUsername('mistermagoo')
        clearPassword()
        enterPassword('test123')
        clickSubmit()
        gotoPageURL()
    })





})  