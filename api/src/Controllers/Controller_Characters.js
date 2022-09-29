const axios = require("axios");
//42 pag de personajes

const GetCharacters = async ()=>{
    let url=[]
    for(let x = 0; x < 6; x++){ // trae 5 paginas = 100 characters
        let request = (`https://rickandmortyapi.com/api/character?page=${x}`)
        url.push(request);
    }
    let promise = url.map((e)=>axios(e))
    let answer = await Promise.all(promise);
    answer = answer.map(e=>e.data.results)
    answer = answer[0].concat(answer[1],answer[2],answer[3],answer[4],answer[5])
    let characters = answer.map(e=>{
        return{
            id:e.id,
            image: e.image,
            name: e.name,
            origin: e.origin.name,
            originURL: e.origin.url,                 //segunda propiedad del objeto origin
            species: e.species,
            episode: e.episode,
        };
    });
    return characters
};


module.exports={GetCharacters}