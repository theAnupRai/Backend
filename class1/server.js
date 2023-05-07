
//Server Instantiate
const express = require('express');
const app = express();

//used to parse req.body in express => in POST or PUT
const bodyParser = require('body-parser');

//specically parse JSON data & add it to request.body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port number 3000")
});


//Routes created
app.get('/', (req, res) => {
    res.send("Hello Everyone");
});

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017n/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {console.log("Express & MongoDB connected successfully")})
.catch((error) =>{console.log("Express & MongoDB are not connected successfully")});
