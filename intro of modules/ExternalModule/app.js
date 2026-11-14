// ES5 : require

// // All data
// const data = require("./externalModule");
// console.log(data);

// // specific data
// const {fname} = require("./externalModule");
// console.log(fname);


// ES6 : import

// // All data
// import data from "./externalModule.js"
// console.log(data);

// // specific data
// import {lname} from "./externalModule.js"
// console.log(lname);



// ================================================================


// 1.single data

// ES5 : require

// const data = require("./externalModule");
// console.log(data.default);


// ES6 : import

// import username from "./externalModule.js"
// console.log(username);


// 2.multiple data

// ES5 : require

// const data = require('./externalModule')
// console.log(data);

// const data = require('./externalModule')
// console.log(data.username);

// const {password} = require('./externalModule')
// console.log(password);


// ES6 : import

import {username,password} from "./externalModule.js"
console.log(username,password);

// import {username} from "./externalModule.js"
// console.log(username);








