const fs = require('fs')
const path = require('path')

// Open a folder
const folderPath = path.join(__dirname, 'files')
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder opened successfully')
    console.log(files)
})

// Create a folder
const newFolderPath = path.join(__dirname, 'files', 'new_folder')
fs.mkdir(newFolderPath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder created successfully')
})


// Rename a folder
const newFolder = path.join(__dirname, 'files', 'new_folder_renamed')
fs.rename(newFolderPath, newFolder, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder renamed successfully')
})

// // Delete a folder
fs.rmdir(newFolder, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder deleted successfully')
})
