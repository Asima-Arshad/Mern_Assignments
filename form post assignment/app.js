import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 4444;

const __dirname = dirname(fileURLToPath(import.meta.url));
var urlencodedParser = bodyParser.urlencoded({extended: false});
console.log(urlencodedParser);
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html')
});

app.post('/dataposted', urlencodedParser,function(req, res){
    console.log(req.body);
    res.sendFile("message.html", {'root': './'});    
});

app.listen(port, ()=>{console.log(`server is running at port ${port}`)
});