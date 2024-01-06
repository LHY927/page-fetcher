const request = require('request');
const fs = require('fs');

const fetcher = function (URL, path){
    request(URL, (error, response, body) => {
        // path should include file name, e.g. ../test.txt
        fs.writeFile(path, body, function (err) {
            if (err)
                throw err;               
            console.log('Downloaded and saved ' + body.length + ' bytes to ' + path);
        }); 
    });
}

if(process.argv.length >= 3){
    fetcher(process.argv[2], process.argv[3])
}