const fs = require('fs')
const path = require('path')

const poemFilePath = path.join(__dirname, 'files', 'poem.txt')
const countriesFilePath = path.join(__dirname, 'files', 'countries.json')

// Read a file asynchronously from the file path
// Note: utf8 is the default encoding. You can also specify other encodings like ascii, binary, etc.
// Use utf8 for text files and binary for binary files
fs.readFile(poemFilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File read successfully')
    // console.log(data)
})


// Read a file synchronously from the file path
const poemData = fs.readFileSync(countriesFilePath, 'utf8')
console.log(poemData) // You can JSON.parse it to get the data as an object




