//DESESTRUCTURACIÓN

const persona = {
    nombre: 'ivan',
    edad: 25,
    clave: 'ios',

}

//ESTA ES LA FORMA 1
// const { nombre, clave, edad } = persona;

// console.log(nombre);
// console.log(clave);
// console.log(edad);

//ESTA ES LA FORMA 2
const useContext = ({ clave, nombre, edad, rango = 'capitan' }) => {
    // console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 1234,
            long: 4321,
        }
    }

}

// const returnUseConstext = ({ nombreClave, anios }) => console.log(nombreClave, anios);
// const averger = useContext(persona);

//ASI SE DESESTRUCTURA UN OBJETO QUE ESTA DESNTRO DE OTRO OBJETO
const { nombreClave, anios, latlong: { lat, long } } = useContext(persona);

// returnUseConstext(averger);

console.log(nombreClave, anios);
//AL MOMENTO DE IMPRIMIR SE IMPRIME DIRECTAMENTE LOS VALORES DEL OBJETO
console.log(lat, long);