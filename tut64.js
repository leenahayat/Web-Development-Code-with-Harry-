//readFileSync //fs(file system module)

// const fs = require("fs");
// const text = fs.readFileSync("dele.txt","utf-8");
// console.log(text);

//Replace function 
const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("browser" ,"Rohan");
console.log("The Content of the file is ");
console.log(text);

//writeFileSync (use to create a new file)
console.log("Creating a new file");
fs.writeFileSync("Leena.txt",text);


