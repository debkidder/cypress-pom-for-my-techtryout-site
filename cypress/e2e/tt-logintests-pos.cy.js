// tt-logintests-pos.spec
/// <reference types="cypress" />

import {
    gotoPageURL,
    enterUsername,
    enterPassword,
    clickSubmit
  } from '../page-objects/tt-loginpage'


describe('Successful login', () => {
    beforeEach(() => {
        gotoPageURL()
    })

    it('Logs in successfully - Correct username and password', () => {
        enterUsername('mistermagoo')
        enterPassword('test123')
        clickSubmit()
    })

    it('Logs in successfully - Mixed-case username', () => {
        enterUsername('misterMAGOO')
        enterPassword('test123')
        clickSubmit()
    })
})      