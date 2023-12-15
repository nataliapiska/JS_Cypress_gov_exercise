describe('exercise_gov_pl', () => {
    
    describe('open main page', () => {
        it('open page', () => {
      
            cy.visit('/')

            cy.title().should('eq', 'Portal Gov.pl')
    
        })
    })
    
    describe('main functionality', () => {

        it('search bar-positive', () => {
            cy.visit('/')

            cy.get('[class="search-form"]')
            .find('[placeholder="Szukaj usług, informacji, wiadomości"]')
            .click().type('dowód osobisty')
            cy.get('[class="search-form"]').find('[type="submit"]').click()

            cy.get('[class="search-results__list result-list"]')
        })

        it('search bar-negative', () => {
            cy.visit('/')

            cy.get('[class="search-form"]')
            .find('[placeholder="Szukaj usług, informacji, wiadomości"]')
            .click().type('...')
            cy.get('[class="search-form"]')
            .find('[type="submit"]').click()

            cy.get('[class="search__result search-results search-results--empty"]')
        })

    })

    describe('dla obywatela', () => {

        it('dla obywatela from main page', () => {
            cy.visit('/')

            cy.get('#services-tabs')
            .find('#citizens-tab')
            .should('contain', 'Dla Obywatela')

            cy.get('#citizens-tab').should('have.class', 'active')
        })

        it('dla obywatela from left side menu', () => {
            cy.visit('/')

            cy.get('#gov-menu')
            .find('[aria-label="Zobacz wszystkie usługi dla obywatela"]')
            .should('contain', 'Usługi dla obywatela')

            cy.get('#citizens-tab').should('have.class', 'active')
        })

    })
    
    describe('dla przedsiębiorcy', () => {

        it('dla przedsiębiorcy from main page', () => {
            cy.visit('/')

            cy.get('#services-tabs').find('#business-tab').should('contain', 'Dla Przedsiębiorcy').click()

            cy.get('#business-tab').should('have.class', 'active')
        })

        it('dla przedsiębiorcy from left side menu', () => {

            cy.visit('/')

            cy.get('#gov-menu')
            .find('[aria-label="Zobacz wszystkie usługi dla przedsiębiorcy"]').click()
            .should('contain', 'Usługi dla przedsiębiorcy')

            cy.get('[class="services-search-holder"]')
            .should('contain', 'Usługi dla przedsiębiorcy')
        })
        
    })

    describe('dla urzędnika', () => {

        it('dla urzędnika from main page', () => {

            cy.visit('/')

            cy.get('#services-tabs').find('#officials-tab').should('contain', 'Dla Urzędnika').click()

            cy.get('#officials-tab').should('have.class', 'active')
        })

        it('dla urzędnika from left side menu', () => {

            cy.visit('/')

            cy.get('#gov-menu')
            .find('[aria-label="Zobacz wszystkie usługi dla urzędnika"]').click()
            .should('contain', 'Usługi dla urzędnika')

            cy.get('[class="services-search-holder"]')
            .should('contain', 'Usługi dla urzędnika')
        })
    })
        
        describe('dla rolnika', () => {

            it('dla rolnika from main page', () => {

                cy.visit('/')
    
                cy.get('#services-tabs').find('#farmer-tab').should('contain', 'Dla rolnika').click()
    
                cy.get('#farmer-tab').should('have.class', 'active')
            })
    
            it('dla rolnika from left side menu', () => {

                cy.visit('/')
                
                cy.get('#gov-menu')
                .find('[aria-label="Zobacz wszystkie usługi dla rolnika"]').click()
                .should('contain', 'Usługi dla rolnika')
    
                cy.get('[class="services-search-holder"]')
                .should('contain', 'Usługi dla rolnika')
            })

        })

        describe('carousel at main page', () => {

            it('choose podpisz dokument elektronicznie', () => {

                cy.visit('/')
    
                cy.get('[class="gov-services blue-bar-row blue-bar-row--epolak"]')
                .find('[class="announcements__next"]').click().click()

                cy.get('[class="announcements__wrapper js-slider"]')
                .find('.announcements__element')
                .should('include.text', 'Podpisz dokument elektronicznie')

            })
    

        })

})
