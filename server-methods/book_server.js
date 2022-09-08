const http = require("http");
const fs = require("fs");
const path = require("path");

const booksDbPath = path.join(__dirname, "db", "books.json");

const PORT = 3001;
const HOST_NAME = "127.0.0.1";

function requestHandler(req, res) {
  if (req.url === "/books" && req.method === "GET") {
    //  LOAD AND RETURN BOOKS
    getAllBooks(req, res);
    console.log("Get request on book route");
  } else if (req.url === "/books" && req.method === "POST") {
    addBook(req, res);
    console.log("POST request on book route");
  } else if (req.url === "/books" && req.method === "DELETE") {
    console.log("DELETE request on book route");
  }
}

function getAllBooks(req, res) {
  fs.readFile(booksDbPath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(400);
      res.end("An error occured");
    }
    res.end(data);
  });
}

function addBook(req, res) {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedBook = Buffer.concat(body).toString();
    console.log(parsedBook);

    //  add the new book to existing book
    fs.readFile(booksDbPath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(400);
        res.end("An error occured");
      }
      console.log(data);
      const oldBooks = JSON.parse(data);
      const newBooks = oldBooks.push(parsedBook);
      console.log(newBooks);
    });
  });
}

const server = http.createServer(requestHandler);

server.listen(PORT, HOST_NAME, () => {
  booksDB = JSON.parse(fs.readFileSync(booksDbPath, "utf8"));
  console.log(`Server is listening on http://${HOST_NAME}:${PORT}`);
});
