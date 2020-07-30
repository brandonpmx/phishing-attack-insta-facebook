const express = require('express');
const path = require('path');
const app = express();
const api = require('./api/api')
require('dotenv').config()

let port = process.env.PORT || 80;

app.locals.basedir = __dirname;

// app.use(function(req, res, next) {
//     console.log(req.url)
//     next();
// })


// ############ middlewares ################

app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(__dirname + '/public'));
app.use('/api', api)

// #########################################



// routing start here  ####################################################################################
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views/landing.html'))
})
app.get('/successStories', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views//successStories.html'))
})
app.get('/instagram', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views/instagram.html'))
})
app.get('/facebook', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views/facebook.html'))
})
app.get('/success', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views/sucess_page.html'))
})






//The 404 Route final################
app.route('*')
    .get((req, res) => {
        console.log('404 page open');
        res.status(404).send(`<h1>Page not found 404 </h1>`);
    })
    .post((req, res) => {
        console.log('404 page open');
        res.status(404).send(`<h1>Page not found 404 </h1>`);
    })

//startListingOnGivenPort
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})