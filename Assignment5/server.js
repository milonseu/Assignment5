const http = require('http');
const fs = require('fs');

var server= http.createServer(function (req,res){

    if(req.url=='/'){
        let data = fs.readFileSync('public/home.html')
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('404  not found');
        res.end();
    }
})
server.listen(3000,function (){
    console.log('server run successfully');
});