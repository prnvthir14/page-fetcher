// //function should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.
// const request = require('request');

var myArgs = process.argv.slice(2);
//console.log(myArgs)



//empty file to save data

// //example of using a request
// request('http://www.google.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

// });


const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

let myUrl = myArgs[0];
let localFilePath = myArgs[1]

download(myUrl, localFilePath, () => {
  console.log('✅ Done!')
})