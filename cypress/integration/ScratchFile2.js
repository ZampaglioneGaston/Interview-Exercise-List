describe('List Test Suite', function(){
    
    beforeEach(function(){
        cy.stubResponse().
        cy.fixture('PageObj').then((par) =>{
            this.pageObj = par
        });

        cy.fixture('Parameters').then((par) =>{
            this.par = par
        });
        cy.visit("/"); 
        cy.wait(4000);

        //cy.wait('@stubbedResponses');
    })

    it('Add Item to list', function(){
        cy.get(this.pageObj.addItem).should('be.visible').type(this.par.itemToAdd).type('{enter}');
        cy.get(this.pageObj.list).should('have.length', 1);

    })


})

