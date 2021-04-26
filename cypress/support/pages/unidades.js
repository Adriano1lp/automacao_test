/// <reference types="cypress" />

export class Unidades {
    constructor(){
        this.click_filtro_facilidade = '#checkoox-select-facilities > .svg-inline--fa'
        this.click_opcao_prox_metro = ':nth-child(4) > .fa-check-square > path'
        this.click_unidade = '#button-see-on-map-2-alphaville > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3'
    }

    clickFiltroFacilidade = () => cy.get(this.click_filtro_facilidade).click()
    clickOpcaoProxMetro = () => cy.get(this.click_opcao_prox_metro).click()
    clickUnidade = () => cy.get(this.click_unidade).click()
}