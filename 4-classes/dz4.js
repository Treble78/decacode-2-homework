const Products = {
    addEachProduct : function (str){
        var product = str.split(' ');
        this.name = product[1];
        this.price = {rubles: Number(product[0]),dollars:(Number(product[0])/60).toFixed(2)}
    }
}

const path = require('path');
const fs = require ('fs');
const CSVPath = path.resolve(__dirname,'products.csv');
const JSONPath = path.resolve(__dirname,'result.json');

const ourData  = fs.readFileSync(CSVPath,'utf8').split(', ');
const products = ourData.map((el)=> new Products.addEachProduct(el));
fs.writeFileSync(JSONPath,JSON.stringify(products),'utf8');

