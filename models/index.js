// Require Mongoose
const MONGOOSE = require('mongoose');

// Connect
MONGOOSE.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Export 
module.exports.Bounty = require('./bounty');