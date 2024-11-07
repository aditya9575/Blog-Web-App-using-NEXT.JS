// this is api point for the contact form and it will create a new contact file in the contact data folder 
import * as fs from "fs"

export default async function handler(req, res) {
    if(req.method === "POST"){
        res.status(200).json(["Yes Post Request"])
        let data = await fs.promises.readdir("contactdata");
        fs.promises.writeFile(`contactdata/${data.length+1}.json` , JSON.stringify(req.body))
    }
    else{
        // handle another http method 
        res.status(200).json(["All-Blogs"])
    }
}