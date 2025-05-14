const fs = require("fs");

// read the file synchronously
let textIn = fs.readFileSync("./File/input.txt", "utf-8");
// console.log(textIn);

// write file synchonously
// const dataRead= `Data read from textIn variable:  ${textIn} \nDate created: ${new Date()}`;
// fs.writeFileSync("./File/writing.txt",dataRead);

/** working asynchronously */

// fs.readFile("./File/input.txt", "utf-8", (error1, data1) => {
//   console.log(data1);
//   fs.readFile(`./File/${data1}.txt`, "utf-8", (error2, data2) => {
//     console.log(data2);
//     fs.writeFile(
//       "./File/append.txt",
//       `This file is being created while writing asynchronously ${data2} \n \n Created date: ${new Date()}`,
//        (err) => {
//                 if (err) {
//                     console.error("Error writing append.txt:", err);
//                 } else {
//                     console.log("File written successfully!");
//                 }
//             }
//     );
//   });
// });


fs.writeFile("./File/append.txt","Append data Hey the little boy....",(error,data)=>{
  if(error){
    console.log(error);
  }else{
    console.log("appended successfully");
  }
});

