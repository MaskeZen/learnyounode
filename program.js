// import fs from "fs";
let fs = require('fs')
let path = require('path')

// learnyounode_01
// console.log("HELLO WORLD")

// learnyounode_02
// let sum = 0
// for (let i = 2; i < process.argv.length; i++) {
//     sum += Number(process.argv[i])
// }

// console.log(sum)

// MY FIRST I/O! (Exercise 3 of 13) 
// let file = process.argv[2]
// let buffer = fs.readFileSync(file)
// let size = buffer.toString().split('\n').length - 1
// console.log(size)

// MY FIRST ASYNC I/O! (Exercise 4 of 13)
// fs.readFile(process.argv[2], (err, data) => {
//     if (err) {
//         console.error('ocurrió un error inesperado!')
//         return
//     }
//     console.log(data.toString().split('\n').length - 1)
// })

// FILTERED LS (Exercise 5 of 13)
// let ext = process.argv[3]
// let dir = process.argv[2]
// fs.readdir(dir, (err, files) => {
//     if (err) {
//         return console.error('ocurrió un error inesperado!')
//     }
//     files.forEach(f => {
//         if (path.extname(f) === '.' + ext) {
//             console.log(f)
//         }
//     })
// })

// MAKE IT MODULAR (Exercise 6 of 13)  
let module06 = require('./module_06')
let ext = process.argv[3]
let dir = process.argv[2]
module06(dir, ext, (err, files) => {
    if (err) {
        return console.error(err)
    }
    files.forEach(f => console.log(f))
})
