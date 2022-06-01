import fs from 'fs';
import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// reading data from the read.txt file.
const myReadStream = fs.createReadStream(__dirname + '/read.txt','utf8');
// creating file to write data.
const myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

//writing data from read.txt to  write.txt 
myReadStream.on('data', (chunk)=>{
    console.log('new chunk received :');
    myWriteStream.write(chunk);
});

//reading and writing data using pipe
const myWriteStream1 = fs.createWriteStream(__dirname + '/write1.txt');
myReadStream.pipe(myWriteStream1);