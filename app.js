var fs = require('fs');

var express = require('express');

var app = express();

var objindex = require('./module/objindex.js'); 

// definerer at view engine skal være ejs, det kunne også have været f.eks. jade,
// mener jeg en af de andre hedder 
app.set('view engine', 'ejs');

// route til index med data fra objindex
app.get('/', function(req, res){

    res.render('index', objindex)
})

// route til about med data læst fra jsonfilen about.json 
app.get('/about', function(req, res){

    fs.readFile('./module/about.json', 'utf-8', function(err, data){
        res.render('about', JSON.parse(data));

    })

})

// ekstra treat, hvis vi får en request som ikke matcher
// de ovenstående får vi en "404 fejl :) "
 app.get('*', function(req, res){

    res.send('Jonas says: "404 error, page not found"')

})


//porten er defineret til 3000
app.listen(3000);


