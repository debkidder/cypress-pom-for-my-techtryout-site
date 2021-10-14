/// <reference types="cypress" />

export function gotoPageURL() {
    cy.visit('https://techtryout.com/testing_loginpage.html')
}

export function enterUsername(usernameText) {
    cy.get('#username').type(usernameText) 
}

export function enterPassword(passwordText) {
    cy.get('#password').type(passwordText)
}

export function clickSubmit() {
    cy.get('#login').click()
}

export function clearUsername() {
    cy.get('#username').focus().clear()
}

export function clearPassword() {
    cy.get('#password').focus().clear()
}

export function checkMsgUsername(expectedMsgText) {
    const valMsg = cy.get('.validation')
    valMsg.should('be.visible')
    valMsg.should('contain.text', expectedMsgText) 
}

export function checkMsgPassword(expectedMsgText) {
    const valMsg = cy.get('.validation')
    valMsg.should('be.visible')
    valMsg.should('contain.text', expectedMsgText) 
}

export function checkMsgBadUsernamePassCombo(expectedMsgText) {
    const valMsg = cy.get('.validation')
    valMsg.should('be.visible')
    valMsg.should('contain.text', expectedMsgText) 
}

export function checkLoginSuccess(expectedMsgText) {
    const valMsg = cy.get('.validation')
    valMsg.should('be.visible')
    valMsg.should('contain.text', expectedMsgText) 
}

export function checkNextPage(expectedHeading) {
    const h1TryOutTestingPage = cy.get('h1')
    h1TryOutTestingPage.should('contain.text', expectedHeading) 
}

