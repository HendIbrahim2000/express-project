// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();
projectData = {};

/* Middleware*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Initialize the main project folder
app.use(express.static('website'))

// Callback function to complete GET '/all'
app.get('/get_data', (req, res)=> {
    console.log('Get Request');
    res.send(projectData)
})

app.post('/save', (req, res)=> {
    console.log(req.body);
    projectData['temperature'] = req.body.temperature
    projectData['date'] = req.body.date
    projectData['user_response'] = req.body.user_response
    res.send(projectData)
})
// Post Route
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})