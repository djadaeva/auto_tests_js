
describe('Восстанавление пароля', function () {
   it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
        
    })
})
