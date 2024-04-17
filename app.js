// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoute = require('./routes/bpmroute');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.createConnection('mongodb+srv://mouadchiali:mouadchiali@clustertestprojet.n7r4egf.mongodb.net/doctors').on('open',()=>{
    console.log("connected")
}).on('error',()=>{
    console.log("not connected")
})


// Middleware
app.use(bodyParser.json());

// Routes
app.use(dataRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
