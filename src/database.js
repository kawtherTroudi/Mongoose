let mongoose = require('mongoose');
const server = 'mongodb+srv://Phae:Password1@hera.9wgzq.mongodb.net';
const database = 'myFirstDatabase';   
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb+srv://${server}/${database}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()
