let pagina = 1;

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina +=1;
        cargarPeliculas();
    } else {
        console.log('error')
    } 
})

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -=1;
        cargarPeliculas();
    } else {
        console.log('error')
    } 
})


const cargarPeliculas = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1947ec1e5af803bf02fcbfdd962b6867&page=${pagina}`);
        console.log(res);

        if (res.status === 200) {
            data = await res.json();
            crearPelis(data) 
        } else {
            console.log('error')
        }
    } catch (error) {
        console.error(error)
    }
}


function crearPelis(peliculas){
    peliInfo = '';
    peliculas.results.forEach(pelicula => {
        peliInfo +=`
            <article class = "pelicula">
                <img class="poster" src = "https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3>${pelicula.title}</h3>
            </article>`;
        });

    document.getElementById('contenedor').innerHTML = peliInfo;

}

cargarPeliculas();