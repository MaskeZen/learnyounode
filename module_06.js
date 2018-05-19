let fs = require('fs')
let path = require('path')

// MAKE IT MODULAR (Exercise 6 of 13)  
module.exports = (dir, ext, callback) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err)
        }
        let archivos = files.filter(f => path.extname(f) === '.' + ext)
        return callback(null, archivos)
    })
}

