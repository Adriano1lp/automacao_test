/// <reference types="cypress" />

import { Home } from '../../support/pages/home'
import { Unidades } from '../../support/pages/unidades'

const home = new Home()
const unidades = new Unidades()

Given(/^que eu acesso o site da Fleury$/, () => {
    home.open()
});

When(/^clico em Unudades$/, () => {
    home.clickMenuUnidades()
});

When(/^escolho um opção no filtro de Facilidades$/, () => {
    //Comando para desativar a notificação de um erro da aplicação
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    unidades.clickFiltroFacilidade()
    unidades.clickOpcaoProxMetro()

});

When(/^seleciono a primeira unidade disponivel$/, () => {
    unidades.clickUnidade()
});

Then(/^devo visualizar o nome da unidade na tela$/, () => {
    cy.contains('Alphaville')
});


