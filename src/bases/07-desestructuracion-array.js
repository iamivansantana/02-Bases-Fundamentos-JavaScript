//DESESTRUCTURACION DE ARREGLOS

const personaje = ['Goku', 'Vegueta', 'Trunks'];

const [, , p3] = personaje;

console.log(p3);

//-------------------------------------------
//desestructura un metodo de tipo get que tiene un arreglo como return
const regresaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = regresaArreglo();

console.log(letras, numeros);

//-------------------------------------------
//              TAREA
//1. el primer valor del arreglo se llamara nombre
//2. el segundo se llamara set nombre


const useState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();