
describe('Верный логин не верный пароль', function () {
   it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio2023');
    cy.get('#loginButton').click();
    cy.wait(1000);
    cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton').should('be.visible');
        
    })
})
