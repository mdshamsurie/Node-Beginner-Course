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
// kalau tak use express, api tak show data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const users = 
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };

  const client = [
    { "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
    },
    { "name": "Graham",
    "username": "gerahe",
    "email": "gerahe@gmail.biz"
    },
    { "name": "Leanne Leen",
    "username": "Leen",
    "email": "Leen@gmail.com.my"
    }

  ]
 

//get request object

app.get('/', (req, res) => {
 res.send('Welcome to mypage!');
// res.send({"data " : users["address"]});
});

app.get('/api/customers', (req, res) => {
res.send({"client " : client});
});



//post request object
app.post('/', (req, res) => {
  res.send('This is post request!');
});


app.post('/api/customers', (req, res) => {
    console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {

    console.log('App listening on port '+ PORT);
});