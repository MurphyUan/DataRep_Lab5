const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

// Parse applcation/json
app.use(bodyParser.json())

//Exercise 3: Return Message "Welcome to Data Representation & Querying"
app.get('/',(req, res) => {
    res.send('Welcome to Data Representation & Querying!')
})

//Exercise 4: Uses URL to pass arguments to screen
app.get(`/hello/:name`, (req, res)=>{
    res.send(`Hello ${req.params.name}`)
})

//Exercise 5: Returns JSON data
app.get(`/api/movies`, (req, res)=>{
    const mymovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ]
        
    res.json({movies: mymovies})
})

//Exercise 6: Returns Index.html to the screen
app.get(`/test`, (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

//Exercise 7: Using Exercise 6 open a form and write to the URL of the request and then return values to user
app.get(`/name`, (req, res)=>{
    res.send(`Hello ${req.query.fname} ${req.query.lname}`)
})

//Exercise 8: Using Exercise 6 open a form and write to the body of the request and then return values to the user
app.post('/name', (req, res)=>{
    res.send(`Hello ${req.body.fname} ${req.body.lname}`)
})

//Exercise 3: Listens to localhost:3000 aka writes to and from
app.listen(port, ()=>{
    console.log(`Server App listening at http://localhost:${port}`)
})