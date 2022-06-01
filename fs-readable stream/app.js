import http from 'http';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// displaying data from readMe.txt
const myReadstream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
myReadstream.on('data' , (chunk)=>{
    console.log('New chunk received :');
    console.log(chunk);
});

