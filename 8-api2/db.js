const fs = require('fs');
const path = require('path');

const pathToJSON = path.resolve(__dirname,'index.json');


  const db = {
    get: (callback) => {
        fs.readFile(pathToJSON, 'utf8', (error, contents) => {
            callback(JSON.parse(contents));
        });
    },
    save: (newItem,callback) => {
        fs.readFile(pathToJSON,'utf-8',(err,content)=>{
            const data = JSON.parse(content);
            const newData = data.concat(newItem);
    
            fs.writeFile(pathToJSON,JSON.stringify(newData,'',3),'utf-8',(err,result) =>{
               callback(newItem);
            });   
        });
    },
    update: (id,updatingItem,callback) => {
        fs.readFile(pathToJSON,'utf-8',(err,content)=>{
            const data = JSON.parse(content);
            const putID = data.findIndex(el=>el.id == id);

            putID >= 0 ? data.splice(putID,1,updatingItem) : false;

            fs.writeFile(pathToJSON,JSON.stringify(data,'',3),'utf-8',(err,result) =>{
                callback(JSON.stringify(updatingItem,'',3));
            });
        });
    },
    remove: (id,callback) => {
        fs.readFile(pathToJSON,'utf-8',(err,content)=>{
            const data = JSON.parse(content);
            const updatedData = data.filter(el=>el.id !== id);
    
            fs.writeFile(pathToJSON,JSON.stringify(updatedData,'',3),'utf-8',(err,result) =>{
                callback('OK'); 
            });
        });
    },
  };

  module.exports = db;

