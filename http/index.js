const http = require('http');
const fileSystem = require('fs');
const path = require('path');



const server = http.createServer(function (req, res) {

    // if (req.url === '/') {
    //     fileSystem.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data);
    //     })
    // } 


    let filePath = path.join(__dirname, (req.url === '/') ? 'index.html' : req.url);

    const extName = path.extname(filePath)

    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        default: 
            contentType = 'text/html'
    }

    if (!extName) {
        filePath += '.html'
    }

    fileSystem.readFile(filePath, (err, content) => {
        if (err) {
            fileSystem.readFile(path.join(__dirname, 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })

})

const PORT = process.env.PORT || 5050

server.listen(PORT, function () {
    console.log(`server running on port ${PORT}...`)
});
