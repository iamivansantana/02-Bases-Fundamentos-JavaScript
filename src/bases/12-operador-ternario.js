//OPERADOR CONDICIONAL TERNARIO

const activo = true;

// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// };

//*Si activo es true con el signo "?" indico mostrar la cadena 'Activo'
//Con el simbolo ":" indico que caso contrario que activo sea false mostrar la cadena 'Inactivo'
// const mensaje = (activo) ? 'Activo' : 'Inactivo';

// const mensaje = (!activo) ? 'Activo' : null;

//*Si estado (activo) es true con el simbolo " &&" indico mostrar la cadena 'Activo123'
//de lo contrario manda automaticamente false
const mensaje = activo && 'Activo123';

console.log(mensaje);