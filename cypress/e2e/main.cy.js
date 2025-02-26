describe('links funcionant', () => {
  it('Projectes', () => {
    cy.visit('http://a22arnfergil.dam.inspedralbes.cat/')
      .get('a').contains('projectes').click()
      .url().should('include', '/projectes')
      .get('a').contains('MindCode').click()
      .url().should('include', 'github.com')
  })
})