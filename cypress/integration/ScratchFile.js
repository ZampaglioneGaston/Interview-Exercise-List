/// <reference types="Cypress"/> 

describe('Scratch file testing', function(){

    beforeEach(function(){
        //cy.intercept({
        //    url : 'https://mysterious-thicket-31854.herokuapp.com/',
        //    method: 'GET'}, 
        //    {fixture: 'responses.json'})
        //.as('stubbedResponses'); 
        cy.visit("/"); 
        cy.wait(4000)
        //cy.wait('@stubbedResponses');
    })

    it('updates the todo-count display', () => {

        cy.get('#footer')
            .should('have.css', 'display', 'none')

        cy.get('#todo-count')
          .should('not.exist')                    // verify counter is not present





        cy.fixture('PageObj').then(pageObj =>{
            cy.fixture('Parameters').then(par=>{
                cy.get(pageObj.addItem).should('be.visible').type(par.itemToAdd).type('{enter}');
                cy.get(pageObj.listItem).last().should(($item) => {
                    const text = $item.text();
                    expect(text).to.contain(par.itemToAdd);
                })
            })
        })


        cy.get('#footer')
            .should('have.css', 'display', 'block')
    
        cy.get('#todo-count')
            .should('exist')                       // now the counter exists
            .invoke('text')
            .should('include', '1')                // and its value is '1'
    })
})