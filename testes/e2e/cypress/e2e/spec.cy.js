describe('Primeiro teste end-to-end', () => {
  it('Cadastra uma pergunta e verifica se ela é listada', () => {
    cy.visit('localhost:3000');
    
    cy.get('#textarea-pergunta').type('3+3');
    cy.get('#btn-pergunta').click();
    cy.get('#tabela-perguntas').contains('3+3');

    cy.visit('localhost:3000/resposta/1');
  });
});



describe('Segundo teste end-to-end', () => {
  it('Cadastra uma pergunta e verifica se ela é listada', () => {
    cy.visit('localhost:3000');
    
    cy.get('#textarea-pergunta').type('4+12');
    cy.get('#btn-pergunta').click();
    cy.get('#tabela-perguntas').contains('4+12');

    cy.visit('localhost:3000/resposta/2');
  });
});


