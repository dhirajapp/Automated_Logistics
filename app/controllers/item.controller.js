const Item = require('../models/items.model.js');

// Create and Save a new Note
// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.price) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const item = new Item({
        name: req.body.name , 
        price: req.body.price 
    });

    // Save Note in the database
    item.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Item.find()
    .then(notes => {
        res.send(items);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
// Find a single note with a noteId
exports.findOne = (req, res) => {
    Item.findById(req.params.itemId)
    .then(item => {
        if(!item) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.itemId
            });            
        }
        res.send(item);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.itemId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.itemId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Item.findByIdAndUpdate(req.params.itemId, {
        name: req.body.name || "Untitled Note",
        price: req.body.price
    }, {new: true})
    .then(item => {
        if(!item) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.itemId
            });
        }
        res.send(item);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.itemId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.itemId
        });
    });
};

