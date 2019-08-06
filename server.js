/* ===================
   Import Node Modules
=================== */
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const mongoose = require('mongoose'); // Node Tool for MongoDB
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const passport = require('passport');
const path = require('path'); // NodeJS Package for file paths

const users = require('./routes/api/users'); // Import Users Routes
const profile = require('./routes/api/profile'); // Import Profile Routes
const posts = require('./routes/api/posts'); // Import Posts Routes
const mails = require('./routes/api/mails'); // Import mails Routes

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Gonfig files
const db = require('./config/keys').mongoURI; // Mongoose Config
require('./config/passport')(passport); // Passport config

//Configure Mongoose Promises
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(passport.initialize()); // Passport middleware

// define a route to download a file 
app.get('/download/:file(*)', (req, res) => {
    var file = req.params.file;
    var fileLocation = path.join(__dirname + '/client/public/upload/files', file);
    console.log(fileLocation);
    res.download(fileLocation, file);
});

// Routes
app.use('/api/v2/users', users); // Use users routes in application
app.use('/api/v2/profile', profile); // Use profile routes in application
app.use('/api/v2/posts', posts); // Use Blog routes in application
app.use('/api/v2/mails', mails); // Use Mails routes in application

// Server static assets, used if in production
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React app
    app.use(express.static(path.join(__dirname, 'client/build'))); // Provide static directory for frontend, like CSS, JS

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

// Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
