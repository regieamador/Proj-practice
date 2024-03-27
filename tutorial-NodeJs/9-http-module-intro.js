const http = require('http')

const  server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Home page')
    }
    else if(req.url === '/about'){
        res.end('Welcome to About page')
    }

    else{
        res.end(`<p>We cant find the page!!!</p>`)
    }
})

//what server it will listen
//in this case its locahost:5000
server.listen(5000)