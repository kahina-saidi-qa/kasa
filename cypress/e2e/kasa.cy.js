describe('Kasa - Tests fonctionnels', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/kasa')
  })

  it('La page d accueil se charge correctement', () => {
    cy.url().should('include', 'localhost:3000')
    cy.get('body').should('be.visible')
  })

  it('Le header est visible', () => {
    cy.get('header').should('be.visible')
  })

  it('Le logo est present', () => {
    cy.get('header').find('img').should('exist')
  })

  it('La navigation contient les bons liens', () => {
    cy.get('nav').should('be.visible')
    cy.get('nav').find('a').should('have.length.greaterThan', 0)
  })

  it('Les cartes logements sont affichees', () => {
    cy.get('article, .card, .logement').should('have.length.greaterThan', 0)
  })

})