const fs = require('fs')
const path = require('path')


// Writing a file asynchronously
const textFilePath = path.join(__dirname, 'files', 'new.txt')
const content = 'This is a new file'

// File gets created in the file system because it does not exist yet
fs.writeFile(textFilePath, content, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully')
})


// Append to a file
fs.appendFile(textFilePath, '\nThis is a third line', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Addition to file success!')
})
