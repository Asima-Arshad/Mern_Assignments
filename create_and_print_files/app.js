  const fs = require('fs');
const path = require('path');

const dirPath =path.join(__dirname,'files');
console.log("dp" + dirPath);
//create files using fs module.

//create files in the directory
// for (let i = 1; i <=10; i++) {
//     fs.writeFileSync(`${dirPath}/file${i}.txt`, 'this is just dummy data !!');
    
// }

//read the files from the directory

fs.readdir(dirPath,(err,files)=>{
    files.forEach(file => {
          console.log(`file : ${file}`);
    });
});
