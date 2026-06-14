describe('Kasa - Tests E2E Complets', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/kasa/home')
  })

  // ✅ HOME PAGE
  it('Affichage correct de la page Home', () => {
    cy.contains('Chez vous, partout et ailleurs').should('be.visible')
    cy.get('.logement').should('have.length.greaterThan', 0)
  })

  // ✅ NAVIGATION LOGEMENT
  it('Accès à une fiche logement', () => {
    cy.get('.logement').first().click()
    cy.url().should('include', '/logement/')
    cy.get('h1').should('be.visible')
  })

  // ✅ CARROUSEL
  it('Navigation dans le carrousel', () => {
    cy.get('.logement').first().click()

    cy.get('.arrow-right').click()
    cy.get('.arrow-left').click()
  })

  // ✅ CARROUSEL BORD (BUG TEST)
  it('Carrousel ne dépasse pas les limites', () => {
    cy.get('.logement').first().click()

    cy.get('.arrow-left').click() // première image
    cy.get('.arrow-right').click()
  })

  // ✅ COLLAPSE
  it('Ouverture / fermeture des collapses', () => {
    cy.get('.logement').first().click()

    cy.contains('Description').click()
    cy.contains('Équipements').click()
  })

  // ✅ CONTENU LOGEMENT
  it('Affichage des informations logement', () => {
    cy.get('.logement').first().click()

    cy.get('h1').should('exist')
    cy.get('.host').should('exist')
    cy.get('.tags').should('exist')
  })

  // ✅ ROUTE INVALID (404)
  it('Affichage page 404', () => {
    cy.visit('http://localhost:3000/kasa/route-invalide')

    cy.contains('404').should('be.visible')
  })

  // ✅ RESPONSIVE MOBILE
  it('Affichage mobile', () => {
    cy.viewport('iphone-x')

    cy.visit('http://localhost:3000/kasa/home')

    cy.get('.logement').should('be.visible')
  })

})