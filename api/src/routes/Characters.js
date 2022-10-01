const axios = require("axios");
const {Router} = require("express");
const {GetCharacters} = require("../Controllers/Controller_Characters")

const character = Router();

character.get("/", async (req,res)=>{
    let chara = await GetCharacters();
    try{
        res.send(chara)
    }catch(e){
        res.status(401).send(e)
    }
})




module.exports={character}