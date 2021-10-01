const fileSystem = require('fs');
const path = require('path');

function creatingFolder (folder) {
    fileSystem.mkdir(path.join(__dirname, `${folder}`), err => {
        if (err) {
            throw err;
        }
    
        console.log('folder created!')
    })
} 

function creatingFile (folder, filename) {
    fileSystem.writeFile(path.join(__dirname, `${folder}`, `${filename}`), '', err => {
        if (err) {
            throw err;
        }
    
        console.log('file created!')
    })
}

function addingContentToFile() {
    fileSystem.appendFile(path.join(__dirname, 'folder', 'content.txt'), '\nsecond data', err => {
        if (err) {
            throw err;
        }

        console.log('data updated')
    })
}

function readingFile() {
    fileSystem.readFile(path.join(__dirname, 'folder', 'content.txt'), 'utf-8', (err, content) => {
        if (err) {
            throw err;
        }
        const data = Buffer.from(content)
        console.log('content:', data.toString())
    })
}

 creatingFolder('http');
 creatingFile('http', 'index.js');
// addingContentToFile();
// readingFile();