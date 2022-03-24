const {Pirate} = require('../models/pirate.model')

module.exports.getAllPirates = (req, res) => {
    Pirate.find({})
        .then(Pirates => res.json(Pirates))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.getSinglePirate = (req, res) => {
    Pirate.findOne({_id: req.params._id})
        .then(pirate => res.json(pirate))
        .catch(err => console.log({message: "There was an error!", error: err}))
}

module.exports.createPirate = (req, res) => {
    const {name, imageUrl, chests, catchPhrase, position, pegLeg, eyePatch, hookHand} = req.body;
    Pirate.create({
        name: name,
        imageUrl: imageUrl,
        chests: chests,
        catchPhrase: catchPhrase,
        position: position,
        pegLeg: pegLeg,
        eyePatch: eyePatch,
        hookHand: hookHand
    })
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePirate =  (req, res) => {
    const {name, imageUrl, chests, catchPhrase, position, pegLeg, eyePatch, hookHand} = req.body;
    Pirate.updateOne({_id: req.params._id}, {
        name: name,
        imageUrl: imageUrl,
        chests: chests,
        catchPhrase: catchPhrase,
        position: position,
        pegLeg: pegLeg,
        eyePatch: eyePatch,
        hookHand: hookHand
    }, {runValidators: true, new: true})
        .then(response => res.json(response))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(response => res.json(response))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}