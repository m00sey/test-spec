const fs = require('fs');
const showdown = require('showdown');
const converter = new showdown.Converter();


function writeHTML(data) {
    console.log("📝 writing docs");
    fs.writeFile('./docs/index.html', converter.makeHtml(data), err => {
        if (err) {
            console.error(err);
        }
        console.log("✅ All done!\n");
    })
}

const readStream = fs.createReadStream('./spec.md', 'utf8');
let data = '';
console.log("📖 reading spec")
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    writeHTML(data);
});