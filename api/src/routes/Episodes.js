const {Router} = require("express");
const {GetEpisodes, SaveEpisodes} = require("../Controllers/Controller_Episodes")

const episode = Router();

episode.get("/", async (req,res)=>{
    let request = await GetEpisodes();
    res.send(request)
})

episode.get("/save", async (req,res)=>{
    let request = await SaveEpisodes();
    try{
        res.send(request)
    }catch(e){
        console.error(e)
    }
})


module.exports={episode}