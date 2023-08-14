describe("Добавление продукта в корзину на сайте Hunting Pony", function () {
  it("Оформление заказа на сайте HuntingPony", function () {
    cy.visit("https://huntingpony.com");
    cy.get("#splide02-slide03").click();
    cy.wait(1000);
    cy.get(".add-cart-counter__btn").click();
    cy.get('[data-add-cart-counter-plus=""]').click();
    cy.wait(1000);
    cy.get(".header__cart").click();
    cy.get(".cart-controls > .button").click();
    cy.get(".decorated-title")
      .contains("Оформление заказа")
      .should("be.visible");
  });
});
