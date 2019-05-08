const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./routes/post');
const bodyParser = require('body-parser'); 
const path = require('path');
const keys = require('./keys');

const port = 5000 || process.env.PORT; //системный порт

const clientPath = path.join(__dirname, 'client/studyhelper/');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.error(err))


// app.get('/', (req, res) => {
    
// });

const app = express();
app.use(bodyParser.json());
app.use('/api/post', postRouter);
app.use(express.static(clientPath));



app.listen(port, function(){
    console.log(`Server is started on port ${port}`);
});