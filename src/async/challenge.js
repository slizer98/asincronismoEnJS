const fetchDate = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/';

const anotherfunction = async(url_api) => {
    try{
        const data = await fetchDate(url_api);
        const character = await fetchDate(`${API}${data.results[0].id}`);
        const origin = await fetchDate(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch {
        console.error(error);
    }
}

console.log('Before');
anotherfunction(API);
console.log('After');