describe('suitename1', () => {
  
  it('test1', () => {

    //trigger(event-name)
    //invoke(jQuery Method)...
    //invoke('attr, 'attribute name')

    cy.visit("https://practicesoftwaretesting.com/");
    cy.get("select").select("Price (Low - High)").invoke("val").should("eq", "price,asc")
    cy.get("select").select("price,desc").invoke("val").should("eq", "price,desc")
    cy.get("#filters > fieldset:nth-child(13) > div:nth-child(2) > ul > fieldset > div:nth-child(2) > label").click();
    cy.get("#filters > fieldset:nth-child(13) > div:nth-child(2) > ul > fieldset > div:nth-child(8) > label").should('exist');
    cy.get("#filters > fieldset:nth-child(13) > div:nth-child(2) > ul > fieldset > div:nth-child(8) > label").click();
    cy.get("#filters > fieldset:nth-child(16) > div:nth-child(3) > label").click();
    cy.get("#search-query").click();
    cy.get('#search-query').type('test');
    cy.get("button[type='submit']").click()
    cy.get("div[data-test='no-results']").should('have.text', 'There are no products found.');
    cy.get("#filters > form.ng-untouched.ng-pristine.ng-invalid > div > button.btn.btn-warning").click();
    cy.get("img[alt='Combination Pliers']").click();
    cy.get("#btn-increase-quantity").click();
    cy.get("#quantity-input").focus().clear();
    cy.get("#quantity-input").type('3');
    cy.get("#btn-add-to-cart").click();
    cy.get("a[aria-label='cart']").click();
    cy.get("aw-wizard-step:nth-child(1) > app-cart > div > div").click();
    cy.get("#email").type('testingenvironment@yopmail.com');
    cy.get("#password").type('Team@102302');
    cy.get("input[value='Login']").click();
    cy.get("p[class='ng-star-inserted']").contains('Hello test qa, you are already logged in. You can proceed to checkout.');
    cy.get("app-login button[type='button']").click();
    cy.wait(2000);
    cy.get("app-address button[type='button']").click();
  //  cy.get("#payment-method").click();
    cy.get('#payment-method').select('Cash on Delivery');
    cy.get("button[data-test='finish']").click();
    cy.get(".alert.alert-success").should('have.text','Payment was successful')
  })
})
