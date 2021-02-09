// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should concat numbers on the display', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '1234')
  })

  it('should maintain a running total when calculating', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();    
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '10');
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15');
  })

  it('should display correct answer after addition', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5');
  })

  it('should display correct answer after subtraction', () => {
    cy.get('#number10').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8');
  })

  it('should display correct answer after multiplying', () => {
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '25');
  })

  it('should display correct answer after division', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1');
  })

  it('should display correct answer after multiple operations', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('.display').should('contain', '10');
    cy.get('#number2').click();    
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '8');
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('.display').should('contain', '16');
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should display negative answer', () => {
    cy.get('#number6').click();
    cy.get('#operator_subtract').click();
    cy.get('#number16').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-10');
  })

  it('should display correct numbers after decimal places', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5');
  })

  it('should display 100000 million x 10000 million as 1e+22', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1e+22');
  })

  it('should display error message after incorrect calculation', () => {
    cy.get('#number666').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'error');
  })
})
