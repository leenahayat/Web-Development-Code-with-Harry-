//Synchronous or Blocking(line by line execution)


//Asynchronous or Non-Blocking(line by line execution not guaranteed,callbacks will fire)

const fs = require("fs");
const text = fs.readFile("dele.txt","utf-8", (err,data)=>{
    console.log(data);
}
);
console.log("This is a message");
