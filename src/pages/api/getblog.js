//here we are reading file data from the system and then usnig slug we are fetching that very data
import * as fs from "fs" 


export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json` ,'utf-8' ,(err, data)=>{
    if(err){
      res.status(500).json({error: "No Such Blog FOund"});
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data));
  })

  
}
