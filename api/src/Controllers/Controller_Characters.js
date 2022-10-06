const axios = require("axios");
const {Episode, Character} = require("../db")
//42 pag de personajes

const GetCharacters = async ()=>{
    let url=[]
    for(let x = 1; x < 6; x++){ // trae 5 paginas = 100 characters
        let request = (`https://rickandmortyapi.com/api/character?page=${x}`)
        url.push(request);
    }
    let promise = url.map((e)=>axios(e))
    let answer = await Promise.all(promise);
    answer = answer.map(e=>e.data.results)
    answer = answer[0].concat(answer[1],answer[2],answer[3],answer[4])
    let characters = answer.map(e=>{
        return{
            id:e.id,
            image: e.image,
            name: e.name,
            origin: e.origin.name,
            //originURL: e.origin.url,                 //segunda propiedad del objeto origin
            species: e.species,
            episode: e.episode,
        };
    });
    return characters
};

const GetDB = async ()=>{
    let dbCharacters = await Character.findAll();
    return dbCharacters;
};

const AllCharacters = async () =>{
    let api = await GetCharacters();
    let db = await GetDB()
    let both = api.concat(db)
    return both;
}

const CreateCharacter = async ( name, image, origin, species,episode) =>{
    try{
        if(id,name,image,origin,species){
            let character = {
                name,
                image,
                origin,
                species
            }
            let episodio = Episode.findAll({where:{id:episode}})
            character.add(episodio);
            Character.create(character)
        }
        let dd = await Character.findOne({where:{name: name}}) ?
        console.log(dd) :  console.log("error")
        
    }catch(e){
        return e
    }
}


module.exports={GetCharacters,AllCharacters,CreateCharacter}