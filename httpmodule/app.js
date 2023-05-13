const http = require('http') 
const fs = require('fs')

const server = http.createServer((req,res)=>{
    var url=req.url
    console.log(url)
    var name={
        firstname: "Lily",
        lastname: "Bloom"
    }
    if(url === '/json'){
        res.writeHeader(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(name));

    }
    else if(url === '/'){
        let data = fs.readFileSync('index.html')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.toString())
        res.end()
    }
    else if(url === '/contact'){
        fs.readFile('./contact.html', (err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.write('Error loading contact.html');
              res.end();
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let html1 = data; 
            html=html1.toString().replace("{{name}}",name.firstname)
            res.write(html);
            res.end();
          });
    } 
})
server.listen(3000)
