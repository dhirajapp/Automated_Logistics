module.exports = (app) => {
    const notes = require('../controllers/item.controller.js');

    // Create a new Item
    app.post('/item',item.create);

    // Retrieve all Items
    app.get('/item', item.findAll);

    // Retrieve a single Item with itemId
    app.get('/Item/:itemId', item.findOne);

   
}