const fs = require('fs')
const path = require('path')

const poemFilePath = path.join(__dirname, 'files')

// Get file stats asynchronously and print them 
fs.stat(poemFilePath, (err, stats) => {
    if (err) {
        console.log(err)
    } else {
        console.log(stats)

        // Get specific stats
        console.log(stats.isFile())
        console.log(stats.isDirectory())
        console.log(stats.size)

    }
})



// Get file stats synchronously and print them
const stats = fs.statSync(poemFilePath)

console.log(stats)
console.log(stats.isFile())
console.log(stats.isDirectory())
console.log(stats.size)
