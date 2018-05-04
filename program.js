// import fs from "fs";
let fs = require('fs')

// learnyounode_01
// console.log("HELLO WORLD")

// learnyounode_02
// let sum = 0
// for (let i = 2; i < process.argv.length; i++) {
//     sum += Number(process.argv[i])
// }

// console.log(sum)

// learnyounode_03
// MY FIRST I/O! (Exercise 3 of 13) 
let file = process.argv[2]
let buffer = fs.readFileSync(file)
let size = buffer.toString().split('\n').length - 1
console.log(size)
