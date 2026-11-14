// fs

// 1.ES5

// with try-catch
try {
    const fs = require("fs");

    fs.WriteStream("demo1.txt");
    console.log("file created");

} catch (error) {
    console.log(error);
}

// without try-catch

const fs = require("fs");

fs.WriteStream("demo.txt");
console.log("file created");



// 2. ES6
import fs from "fs"
fs.WriteStream("demo2.txt");
console.log("file created");
