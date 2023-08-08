const axios = require('axios');


exports.render=(req,res)=>{

    axios.get('http://localhost:10000/api/users')
    
    .then(function(response){
        console.log(response);
        res.render("index", { users : response.data });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.form=(req,res)=>{
    res.render('form');
}