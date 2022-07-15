const express = require('express');
const path = require("path");
const app = express();
const methodOverrida = require("method-override");
const session = require("express-session");

const port = 5001;
app.set('path', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverrida('_method'));
app.use(session({
        secret:"secret",
        resave: true,
        saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send({
        data: 'welcome to note-app'
    });
});

app.listen(port, () => {
    console.log("URL: http://localhost:5001" );
});
