const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const pathToJSON = path.resolve(__dirname,'index.json');

const app = express();
const port = 3000;


app.use(bodyParser.json());


app.get('/items',(req,res) => {

    fs.readFile(pathToJSON,'utf-8',(err,content)=>{
        res.setHeader('Content-Type','application/json');
        res.send(content);
    }); 
});

app.post('/items',(req,res) => {

    fs.readFile(pathToJSON,'utf-8',(err,content)=>{
        const data = JSON.parse(content);
        const newData = data.concat(req.body);

        fs.writeFile(pathToJSON,JSON.stringify(newData,'',3),'utf-8',(err,result) =>{
            res.send(req.body);
        });
    }); 
});

app.put('/items/:id',(req,res) =>{

    fs.readFile(pathToJSON,'utf-8',(err,content)=>{
        const data = JSON.parse(content);
        const IDExists = data.findIndex(el=>el.id == req.params.id);

        if(IDExists >= 0){const updatedData = data.filter(el=>el.id !== req.params.id).concat(req.body)}
        else{const updatedData = data}
        
        fs.writeFile(pathToJSON,JSON.stringify(updatedData,'',3),'utf-8',(err,result) =>{
            res.send(JSON.stringify(updatedData,'',3));
        });
    });
});

app.delete('/items/:id',(req,res) =>{

    fs.readFile(pathToJSON,'utf-8',(err,content)=>{
        const data = JSON.parse(content);
        const updatedData = data.filter(el=>el.id !== req.params.id);

        fs.writeFile(pathToJSON,JSON.stringify(updatedData,'',3),'utf-8',(err,result) =>{
            res.send(JSON.stringify(updatedData,'',3));
        });
    });
});



app.listen(port,()=>{

    console.log(`App Listening on port ${port}`);
})