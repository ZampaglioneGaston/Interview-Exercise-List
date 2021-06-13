
Cypress.Commands.add('stubResponse', (pObjects, parameters) => { 

    cy.intercept({
        url : 'https://mysterious-thicket-31854.herokuapp.com/',
        method: 'GET'}, 
        {fixture: 'responses.json'})
    .as('stubbedResponses');

})