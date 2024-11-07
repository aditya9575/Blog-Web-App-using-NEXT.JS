import * as fs from "fs";

export default async function handler(req, res) {
    try {
        // we start by reading the file -> blogdata from our system 
        let data = await fs.promises.readdir("blogdata");
        let myfile;
        let allBlogs = [];

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            console.log(`Reading file: ${item}`);

            // here we are reading & storing the single item of blog data which for us is a single file so till here we have a 
            // object of our single file one by on being stored in ->  myfile  
            myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8');

            try {
                // here we are storing the myfile component into the array named allBlogs one by one as the for loop iterates over the data 
                allBlogs.push(JSON.parse(myfile));
            } catch (err) {
                console.error(`Error parsing JSON in file ${item}:`, err);
            }
        }

        res.status(200).json(allBlogs);
    } catch (err) {
        console.error("Error reading blogdata directory:", err);
        res.status(500).json({ error: "Error reading files" });
    }
}
