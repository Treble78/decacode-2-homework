const bodyParser = require('body-parser');
const express = require('express');
const db = require('./db.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/items',(req,res) => {
    db.get((json) => {
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify(json,'',3));
    });
});

app.post('/items',(req,res) => {
    db.save(req.body,(createdItem) => {
        res.send(createdItem);
    });
});

app.put('/items/:id',(req,res) =>{
    db.update(req.params.id,req.body,(updatedData) =>{
        res.setHeader('Content-Type','application/json');
        res.send(updatedData);
    });
    
});

app.delete('/items/:id',(req,res) =>{

    db.remove(req.params.id,(response) => {
        res.send(response);
    }); 
});

app.listen(port,()=>{

    console.log(`App Listening on port ${port}`);
})