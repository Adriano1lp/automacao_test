/// <reference types="cypress" />

export class Home {
    constructor(){
        this.click_menu_unidades = 'Unidades'
    }

    open = () => {       
        cy.visit('/')
    }

    clickMenuUnidades = () => cy.contains(this.click_menu_unidades).click()
}
