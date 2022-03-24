const PirateController = require('../controllers/pirate.controller')

module.exports = function(app){
    app.get('/api/pirates/', PirateController.getAllPirates);
    app.get('/api/pirates/:_id', PirateController.getSinglePirate);
    app.put('/api/pirates/update/:_id', PirateController.updatePirate);
    app.delete('/api/pirates/delete/:_id', PirateController.deletePirate);
    app.post('/api/pirates/create', PirateController.createPirate);
}