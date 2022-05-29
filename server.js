const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let random = Math.random();
    let computerMove = random < 0.33 ? 'rock' :
                    random < 0.66 ? 'paper' : 'scissor'
    const objToJson = {
      computer: computerMove,
    }
    res.end(JSON.stringify(objToJson));
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404 Error', function(err, data) {
      if (err) {
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.port || 5000

server.listen(PORT);