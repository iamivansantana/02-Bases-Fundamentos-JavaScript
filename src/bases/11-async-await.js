const getImagen = async() => {

    try {

        const apiKey = 'lv4tPI7Lmk92IkF7NhsS9IaSmwqby1A1';

        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        //MANEJO DEL ERROR
        console.error(error);
    }


}
getImagen();




// peticion
//     .then(respuesta => respuesta.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn);