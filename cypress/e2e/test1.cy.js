
describe('Авторизация с верным логином и паролем', function () {
   it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
        
    })
})
