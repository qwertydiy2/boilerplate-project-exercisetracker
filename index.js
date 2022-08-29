const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const username = encodeURIComponent("qwertydiy");
const password = encodeURIComponent("Thekillerbasslose2-0");
const cluster = "freecodecamp-cluster.gf1kd.mongodb.net";
const database = "gwExerciseDatabase";
let uri = `mongodb+srv://${username}:${password}@${cluster}/${database}`;
mongoose.connect(uri);
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(bodyParser.urlencoded({ extended: false })))
app.post('/api/users', function (req,res,params) {
	
})
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
