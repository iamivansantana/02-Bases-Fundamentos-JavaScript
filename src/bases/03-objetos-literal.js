const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        cp: 39047,
        lat: 123.456,
        long: 98.76654,
    }
}

//  console.table( persona );

const persona2 = {...persona };

persona2.nombre = 'Petter';

console.log(persona);
console.log(persona2);