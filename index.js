const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  let extname = path.extname(filePath);

  console.log(extname);

  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;

    case '.css':
      contentType = 'text/css';
      break;

    case '.json':
      contentType = 'application/json';
      break;

    case '.png':
      contentType = 'text/png';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'htf8');
          }
        );
      } else {
        res.writeHead(500);
        res.end(`server down ${err}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on  port${PORT}`));

// if (req.url === '/api/user') {
//   const user = [
//     {
//       name: 'abd',
//       age: 18,
//     },
//     {
//       name: 'salam',
//       age: 19,
//     },
//   ];
//   res.end(JSON.stringify(user));
//   res.writeHead(200, { 'content-Type': 'application.js' });
// }
