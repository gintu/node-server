const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();
let readStream = fs.createReadStream("./example.txt", "utf8");
let writeStream = fs.createWriteStream("./example2.txt.gz");
readStream.pipe(gzip).pipe(writeStream);
