/// <reference types="Cypress"/> 


// Test Suite will add, edit and remove an item.

describe ("Testing list: Add, Remove, Edit.", function(){

    beforeEach(function(){
        cy.stubResponse();
        cy.visit("/"); 
        cy.wait(4000)

    });


    //Add to list.

    it("Add item to list.", function(){

        cy.addItem('PageObj', 'Parameters');

        cy.addItem('PageObj', 'Parameters');

    });


    // Edit from list.

    it("Edit item from list.", function(){ 

        cy.modifyItem('PageObj', 'Parameters');
    }) ;


    //Remove from list.

    it("Remove item from list.", function(){    

        cy.deleteItem('PageObj', 'Parameters');

    });


    //Complete task.
    it('Complete item and delete it', function(){

        cy.completeItem('PageObj', 'Parameters');

    });


}); // End
