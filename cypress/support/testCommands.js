
Cypress.Commands.add('addItem', (pObjects, parameters) => { 


    cy.fixture(pObjects).then(pageObj =>{
        cy.fixture(parameters).then(par=>{
            cy.get(pageObj.footer).then(($footer) => {

                if ($footer.is(":visible")) {

                    cy.log('IF path');
                    cy.get(pageObj.countItem).then(($el1) =>{
                        const prev = parseFloat($el1.text());
                        cy.log(prev);
    
                        cy.get(pageObj.addItem).should('be.visible').type(par.itemToAdd).type('{enter}');
                        cy.get(pageObj.listItem).last().should(($item) => {
                            const text = $item.text();
                            expect(text).to.contain(par.itemToAdd);
                        });

                        cy.get(pageObj.countItem).invoke('text').then(parseFloat).should('be.gt', prev);
                        cy.wait(2000);
                    });

                } else {
                    cy.get(pageObj.countItem).should('not.exist');
                    cy.log('Else path');
                    const prev = 0
                    cy.log(prev);

                    cy.get(pageObj.addItem).should('be.visible').type(par.itemToAdd).type('{enter}');
                    cy.get(pageObj.listItem).last().should(($item) => {
                        const text = $item.text();
                        expect(text).to.contain(par.itemToAdd);
                    })

                    cy.get(pageObj.countItem).invoke('text').then(parseFloat).should('be.gt', prev);
                    cy.wait(2000);

                }
            });
        });
    });
});


Cypress.Commands.add('modifyItem', (pObjects, parameters) => { 

    cy.fixture(pObjects).then(pageObj =>{
        cy.fixture(parameters).then(par=>{
            cy.get(pageObj.listItem).last().dblclick();
            cy.get(pageObj.editItem).clear().type(par.itemEdit).type('{enter}');
            cy.get(pageObj.listItem).last().should('contain', par.itemEdit);
            cy.wait(2000)
        });
    }); 

});


Cypress.Commands.add('deleteItem', (pObjects, parameters) => { 
    cy.fixture(pObjects).then(pageObj =>{
        cy.fixture(parameters).then(par=>{
            cy.get(pageObj.countItem).then(($el) =>{
                const prev = parseFloat($el.text())
                cy.get(pageObj.list).find(pageObj.deleteBtn).eq(par.delete).invoke('show').click();                    //Search for specific btn 
                cy.get(pageObj.countItem).invoke('text').then(parseFloat).should('be.lt', prev);
            });
        }) ;
    });
});


Cypress.Commands.add('completeItem', (pObjects, parameters) => { 
    cy.fixture(pObjects).then((pageObj) => {
        cy.fixture(parameters).then(par=>{ 
            cy.get(pageObj.list).find(pageObj.doneBtn).eq(par.index).check();
            cy.get(pageObj.doneBtn).eq(par.index).should('have.attr', 'checked');
        });
    });
});