const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

//Routeurs
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

//Connection à la base de donnée smsdb
mongoose.connect('mongodb+srv://nj:nj@clustersms.esptv.mongodb.net/smsdb?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Gestionnaire de routage pour l'upload des images
app.use('/images', express.static(path.join(__dirname, 'images')));

//Routes pour l'authentification
app.use('/api/auth',userRoutes);

//Routes pour les sms
app.use('/api/message', messageRoutes);



module.exports = app;