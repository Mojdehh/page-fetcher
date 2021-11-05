const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const URL = args[0];
const filePath = args[1];


request(URL, (error, response, body) => {
 
  let fileSize = body.length;

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
    
  });
  
});

