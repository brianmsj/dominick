const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const Comment = require('./models/comments');


mongoose.Promise = global.Promise
let secret = {
  DATABASE_URL: process.env.DATABASE_URL
};

if(process.env.NODE_ENV != 'production') {
  secret = require('./secret');
}
global.secret = secret




const app = express();
app.use(bodyParser.json());

app.post('/api/comment', (req,res) => {
  const commentDetails = {
    name: req.body.name,
    date: req.body.date,
    comment: req.body.comment
  }
  Comment.create(commentDetails)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message: 'internal server error'});
  })
});
app.get('/api/comment', (req,res) => {
  Comment
  .find()
  .exec()
  .then(listings => {
    res.json(listings);
  })
  .catch(err=> {
    res.status(500).json({error: 'Something Went Wrong'})
  })
})

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect(secret.DATABASE_URL || process.env.DATABASE_URL, err => {
            if(err) {
              return reject(err);
            }
            console.log("Db Connected");
            server = app.listen(port, () => {
              resolve();
            }).on('error', reject);
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer, secret
};
