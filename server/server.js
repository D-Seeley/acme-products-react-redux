//Import components
const express = require('express');
const path = require('path');
const { sync, seed } = require('./db');
const morgan = require('morgan');
const bodyParser = require('body-parser')

//Build Server
const app = express();
const PORT = process.env.PORT || 1337;


//import middleware
app.use(morgan('combined'));
app.use(require('body-parser').json());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api', require('./api'));
app.use(express.json());



//configure main route
app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//link API

//initialize app

const init = async ()=> {
    app.listen(PORT, ()=> {
        console.log(`App Listening on ${PORT}`);
    });
    
    await sync();
    await seed();
}

init();