const {Router} = require("express");
const {GetEpisodes, SaveEpisodes} = require("../Controllers/Controller_Episodes")

const Episode = Router();

Episode.get("/r", async (req,res)=>{
    let request = await GetEpisodes();
    res.send(request)
})

Episode.get("/save", async (req,res)=>{
    let request = await SaveEpisodes();
    try{
        res.send(request)
    }catch(e){
        console.error(e)
    }
})


module.exports={Episode}