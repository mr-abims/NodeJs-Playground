const fs = require("fs");
const path = require("path");

const poemFilePath = path.join(__dirname, "files", "countries.json");

// Opening a file asynchronously for reading
// fs.open(poemFilePath, "r", (err, fd) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File opened successfully");
//   // After opening, you can do any operation on the file, like reading, writing, appending, etc.
//   // Reading a file

//   fs.readFile(fd, "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("File read successfully");
//     console.log(data);
//   });
// });

// Opening a file synchronously for reading
const poemFd = fs.openSync(poemFilePath, "r");
// readFileSync is a blocking operation, so it will wait until the file is read
const poemData = fs.readFileSync(poemFd, "utf8");
console.log("File descriptor: ", poemData);
