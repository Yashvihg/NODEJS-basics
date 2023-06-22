            //  FS using Event Emitters/streams
            const EventEmitter = require("events");
const fs = require("fs");
            let dataFromFile = "";
            const readableStream = fs.createReadStream("Input.txt");    //we can use readFile but it will read full data. we cant process in chunks. 
            const writeableStream = fs.createWriteStream("Output.txt");


            // readableStream.on("data", chunk => {
                //dataFromFile += chunk;  // on appending the byte format gets converted to string and prints normally. ˀ
                //   console.log(dataFromFile);
            //     // console.log(chunk);
            //     console.log(">>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>");
            // });

            //but here we did read the data in bytes, stored the whole thing and as a whole printed it to the output file. INSTEAD, we can even write the data in bytes as and when we recieve the bytes. 
            // readableStream.on("end", () => {
            //     writeableStream.write(dataFromFile);
            //     writeableStream.end();
            // });
            // console.log("Program Ended!");

            // INSTEAD WE USE pipe
                // new EventEmitter() --internally this is used. 

            readableStream.pipe(writeableStream);
            console.log("Program Ended ");