- the index file hs three types of ways to ONLY READ the particular files.

- The last part uses fs function to to extract data from the input.txt and write it to the output.txt file. 

```
            // //  FS using Event Emitters/streams
            const fs = require("fs");
            let dataFromFile = "";
            const readableStream = fs.createReadStream("Input.txt");    //we can use readFile but it will read full data. we cant process in chunks. 
            
            readableStream.on("data", chunk => {
                dataFromFile += chunk;  // on appending the byte format gets converted to string and prints normally. ˀ
                //   console.log(dataFromFile);
                // console.log(chunk);
                console.log(">>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>");
            });
            console.log("Program Ended!"); 
