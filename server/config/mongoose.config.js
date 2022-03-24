const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mernbelt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Successfully established connection with the database!"))
    .catch(() => console.log("There was an error connecting with the database!"))