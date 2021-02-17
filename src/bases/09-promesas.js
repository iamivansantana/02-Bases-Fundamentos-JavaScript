//PROMISE

const { getHeroeById } = require("./bases/08-imports-exports");
//const { heroes } = require("./data/heroes");

//Codigo simple de una promesa
// const promesa = new Promise();

// const promesa = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     console.log('2 segundos despues');
//     //     resolve();
//     // }, 2000);
//     setTimeout(() => {

//         const heroe = getHeroeById(1);
//         // console.table(heroe);

//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');

//     }, 2000);

// });

// promesa.then((recibeHeroe) => {
//     console.log('HEROE: ', recibeHeroe);
// }).catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     console.log('2 segundos despues');
        //     resolve();
        // }, 2000);
        setTimeout(() => {

            const heroe = getHeroeById(id);

            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            };
            // console.table(heroe);

            //resolve(heroe);
            // reject('No se pudo encontrar el heroe');

        }, 2000);

    });

    // return promesa;
};

//Para minimizar codigo solo se pone console.log or warn
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);

//Lo siguiente es lo mismo

// getHeroeByIdAsync(10)
//     .then(heroe => console.log('Heroe: ', heroe))
//     .catch(err => console.warn(err));