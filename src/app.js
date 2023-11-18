// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1> Welcome to mypage </h1>');

// });


// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server Running ....');
// });

// const { v4: uuidv4 } = require('uuid');

// console.log(uuidv4());

//--------------------------------------//
const express = require('express');
const app = express();
const PORT = 3000;

//get request object
app.get('/', (req, res) => {
 res.send('Welcome to mypage!');
});

//post request object
app.post('/', (req, res) => {
 res.send('This is post request!');
});

app.listen(PORT, () => {

    console.log('App listening on port '+ PORT);
});