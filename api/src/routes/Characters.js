const axios = require("axios");
const {Router} = require("express");
const {GetCharacters, AllCharacters, CreateCharacter} = require("../Controllers/Controller_Characters");
const {Character,Episode} = require("../db");

const character = Router();

character.get("/", async (req,res)=>{
    const{name}=req.query
    let chara = await AllCharacters();
    try{
        if(name){
            let filter = chara.filter(e=>e.name.toLowerCase().includes(name.toLocaleLowerCase()))
            filter.length ? res.send(filter) : res.send("Character not found")
        }else{
            res.send(chara)
        }
    }catch(e){
        res.status(401).send(e)
    }
})

character.get("/select/:id", async (req,res)=>{
    const {id} = req.params;
    console.log(id)
    let chara=await GetCharacters();
    try{
        if(id){
            let filter = chara.filter(e=>e.id == id)
            filter.length ? res.send(filter) : res.send("Id not found") 
        };
    }catch(e){
        res.send(e)
    };
});

character.post("/create", async (req,res)=>{
    const { name, image, origin, species, episode} = req.body;
    try{
        if(name,image,origin,species){
            let character = await Character.create({
                name,
                image,
                origin,
                species
            })
            let episodio = await Episode.findAll({where:{id:episode}})
            character.addEpisode(episodio);
            //await Character.create(character)
        }
        //let dd = await Character.findOne({where:{name: name}})
        res.status(200).send("Character Created!");
    }catch(e){
        res.status(401).send(e)
    }
})



module.exports={character}