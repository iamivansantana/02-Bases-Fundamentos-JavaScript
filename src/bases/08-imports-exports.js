//  import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'
// const { heroes } = require("./data/heroes");

const { heroes } = require("../data/heroes");

export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

//console.log(getHeroeById(2));

//find??? or filter
export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroeByOwner('DC'));