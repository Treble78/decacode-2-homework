
const path = require('path');
const fs = require('fs');
const pathToJSON = path.resolve(__dirname, 'index.json');
const data = JSON.parse(fs.readFileSync(pathToJSON, 'utf8'));

let average_age = (data.reduce((overall,el)=>overall+el.age,0)/data.length).toFixed(2);
let name_age_concat = data.map((el) => el.age + ' ' + el.name).join(',');
let skilled_guys = data.filter((el)=> el.skills.includes('Paint') === true).map((fel)=>fel.name).join(',');

console.log('Количество пользователей:' + data.length);
console.log('Средний возраст пользователей:' + average_age);
console.log(name_age_concat);
console.log(skilled_guys);
