var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test');
console.log(process.env.MONGODB_URI);

module.exports = {mongoose};
