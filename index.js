const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/api/user") {
    const user = [
      {
        name: "abd",
        age: 18,
      },
      {
        name: "salam",
        age: 19,
      },
    ];
    res.end(JSON.stringify(user));
    res.writeHead(200, { "content-Type": "application.js" });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running...${PORT}`));


//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "index.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }