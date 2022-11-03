const express = require('express'); //Line 1
const port = process.env.PORT || 5000; //Line 3
const bodyParser = require('body-parser')
const app = express(); //Line 2

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// this is a route to test connection
app.get('/express_backend_test', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 


//all task apis
app.use('/api/tasks', require('./routes/api/tasks'));