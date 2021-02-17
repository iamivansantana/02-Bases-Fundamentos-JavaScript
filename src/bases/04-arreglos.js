// arreglos en JS

// const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);

let arreglo2 = [...arreglo, 5, 6, 7];

//.map crea un nuevo array con los valores del array indicado, recibe una function(){ return }
const arreglo3 = arreglo2.map(function(equis) {
    return equis * 2;
});
// arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);