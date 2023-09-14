require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://indoorCrew:indoor2001crewucsc@cluster0.fvcic4g.mongodb.net/indoorCrew?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})