
describe('Логин без @', function () {
   it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('germandolnikov.com');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.wait(1000);
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton').should('be.visible');
        
    })
})
