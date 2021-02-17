const apiKey = 'lv4tPI7Lmk92IkF7NhsS9IaSmwqby1A1';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Promesa normal
// peticion.then(respuesta => {
//         respuesta.json().then(data => {
//             console.log(data)
//         })
//     })
//     .catch(console.warn);

//PROMESA ENCDENADA or  PROMESAS EN CADENA
peticion
    .then(respuesta => respuesta.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);