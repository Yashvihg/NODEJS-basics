// const fs = require("fs");
// it is async so it has to read the input.txt file which means
// //  it reads the file and in the mean time the rest of the programs runs.
//  fs.readFile("Input.txt", "utf-8", (err, dataFromFile) => {
    //   // this if-else is a callback function
    //   if (err) {
        //     console.log(err);
        //   } else {
            //     console.log(dataFromFile);
            //   }
            // });
            // console.log("Program Ended!!!");
            
            // // readfile is an asynchronous method.
            
            // //sync code.
            
            // const fs = require("fs");
            // let dataFromFile = fs.readFileSync("Input.txt", { encoding: "utf-8" });
            // console.log(dataFromFile);
            // console.log("Program Ended!");
            
            // //  FS using Event Emitters/streams
            const fs = require("fs");
            let dataFromFile = "";
            const readableStream = fs.createReadStream("Input.txt");    //we can use readFile but it will read full data. we cant process in chunks. 
            const writeableStream = fs.createWriteStream("Output.txt");

            readableStream.on("data", chunk => {
                dataFromFile += chunk;  // on appending the byte format gets converted to string and prints normally. ˀ
                //   console.log(dataFromFile);
                // console.log(chunk);
                console.log(">>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>");
            });

            //but here we did read the data in bytes, stored the whole thing and as a whole printed it to the output file. INSTEAD, we can even write the data in bytes as and when we recieve the bytes. 
            readableStream.on("end", () => {
                writeableStream.write(dataFromFile);
                writeableStream.end();
            });
            console.log("Program Ended!");
            








            // const { log } = require("console"); --wth is this????



