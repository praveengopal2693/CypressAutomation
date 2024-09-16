describe('Mobile Test Case', () => {
  
    // Set viewport to iPhone 6 dimensions before each test
    beforeEach(() => {
    cy.viewport('iphone-6'); // You can also specify custom dimensions like cy.viewport(375, 667)
    });
  
    it('Visits the mobile site and verifies elements', () => {
      // Visit the website

    //  const test = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

      cy.visit('https://practicesoftwaretesting.com/');
  
      // Verify that the mobile menu button is visible
      cy.get('.navbar-toggler-icon').should('be.visible');
  
      // Click the mobile menu button
      cy.get('.navbar-toggler-icon').click();
  
      // Verify that the mobile navigation menu opens
      cy.get('.navbar-nav.ms-auto.mb-2.mb-lg-0').should('be.visible');
  
      // Check if the first item in the mobile nav is "Home"
      cy.get('.navbar-nav.ms-auto.mb-2.mb-lg-0').should('contain.text', 'Sign in');
  
      // Verify that the site title is displayed correctly
      cy.get('body > app-root > app-header > nav > div > a').should('be.visible');
  
      // Simulate mobile scrolling to the footer
      cy.scrollTo('bottom');
      
      // Verify that the footer is visible
      cy.get('body app-root app-footer').should('be.visible');

      // Verify that the mobile menu button is visible
      cy.get('.navbar-toggler-icon').should('be.visible');
  
      // Click the mobile menu button
      cy.get('.navbar-toggler-icon').click();
  
      // Verify that the mobile navigation menu opens
      cy.get('.navbar-nav.ms-auto.mb-2.mb-lg-0').should('be.visible');
  
      // Verify that the contact form is visible
      // cy.get('.nav-link[data-test='nav-contact']').should('be.visible');

      // Verify that the contact form is clickable
      cy.get('#navbarSupportedContent > ul > li:nth-child(3) > a').click();
  
      // Fill in the name input field
      cy.get('#first_name').type('John Doe');
  
      // Fill in the email input field
      cy.get('#last_name').type('john.doe@example.com');
  
      // Fill in the message text area
      cy.get('#email').type('testing@yopmail.com');

      cy.get('#subject').select('Webmaster');

      cy.get('#message').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    
      // Submit the form
      cy.get('body > app-root > div > app-contact > div > div > div > form > div > div:nth-child(2) > div.input-group.mb-3 > input').click();
  
      // Verify successful form submission by checking a confirmation message
      cy.get('body > app-root > div > app-contact > div > div > div > div').should('be.visible').and('contain.text', 'Thanks for your message! We will contact you shortly.');
    })
})

    