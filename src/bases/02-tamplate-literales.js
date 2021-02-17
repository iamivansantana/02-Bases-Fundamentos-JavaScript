const nombre = 'Ivan';
const apellido = 'ojendis';

//Para concatenar usualmente se usaba asi ->
// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function setSaludo(nombre) {

    return 'hola mundo ' + nombre;
}

console.log(`este es un texto: ${setSaludo(nombre)}`);