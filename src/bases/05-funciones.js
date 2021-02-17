//Funciones en JS

//Habitualmente se escribian asi.
// function saludar(nombre) {
//     return 'hola ' + nombre;
// }

// console.log(saludar('ivan'));


//es preferible escribirlas asi.abs
const saludar = function(nombre) {
    return 'hola ' + nombre;
}

console.log(saludar('ivan'));


//----------------------------------------
//Esto es una funcion de flecha.
const saludar2 = (nombre) => {
    return 'hola ' + nombre;
}

console.log(saludar2('ojendis'));



//-----------------------------------
//Funcion de flecha retrnando en una sola linea
const saludar3 = (nombre) => 'hola ' + nombre;

console.log(saludar3('santana'));



//----------------------------------
//Funcion de flecha vacia retrnando en una sola linea.
const saludar4 = () => 'hola mundo';

console.log(saludar4());

//-----------------------------------

const getUser = () => ({
    uid: '1234567',
    username: 'ios123',
})

const resultado = getUser();
console.log(resultado);


//TAREA
//1. transformar a funcion de flecha.
//2. Tiene que retornar un objeto implicito
//3. Pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('ivan');

// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('ivan');
console.log(usuarioActivo);