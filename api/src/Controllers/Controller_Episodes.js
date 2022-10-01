const axios =  require("axios");
const {Episode} = require("../db");
const { episode } = require("../routes/Episodes");

//conseguir ep --> guardar en db 

const GetEpisodes= async ()=>{ //51 ep
    let array = [];
    let episodes = []
    for(let x = 1; x < 4; x++){
        let url = `https://rickandmortyapi.com/api/episode?page=${x}`
        array.push(url)
    };
    let request =  array.map((e) => axios(e)) // 
    let promise = await Promise.all(request)
    let answer = promise.map(e=>e.data.results)
    answer.forEach(e => episodes.push(e));
    episodes = episodes[0].concat(episodes[1],episodes[2])

    return episodes
}

const SaveEpisodes = async ()=>{
    let checkDB = await Episode.findAll();
    let episodes = await GetEpisodes();
    try{
        if (checkDB.length){
            return checkDB;
        }else{
            await episodes.forEach(e=>{
                Episode.findOrCreate({
                    where:{
                        id: e.id, //1
                        name: e.name, //pilot
                        Characters: e.characters //[url]
                    }
                })
            })
        }
    }catch(e){
        console.error(e)
    }
    return Episode.findAll();
}

module.exports={GetEpisodes, SaveEpisodes}