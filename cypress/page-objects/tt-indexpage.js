/// <reference types="cypress" />

export function gotoSiteIndex() {
    cy.visit('https://techtryout.com/')
}

export function gotoPageUrl(pageUrl) {
    cy.visit(pageUrl)
}

export function clickImageGit() {
    cy.get('#image_git').scrollIntoView()
    cy.get('#image_git').click()  
}

export function clickImageJava() {
    cy.get('#image_java').scrollIntoView()
    cy.get('#image_java').click()  
}

export function clickImageLinux() {
    cy.get('#image_linux').scrollIntoView()
    cy.get('#image_linux').click()  
}

export function checkPageTitle(expectedTitle) {
    cy.get('title').should('contain.text', expectedTitle)
}

export function clickMenuGit() {
    cy.get('.menu').find('ul.active').find('li').find('a').eq(1).click({ force: true })
}

export function clickMenuJava() {
    cy.get('.menu').find('ul.active').find('li').find('a').eq(2).click({ force: true })
}

export function clickMenuLinux() {
    cy.get('.menu').find('ul.active').find('li').find('a').eq(3).click({ force: true })
}









