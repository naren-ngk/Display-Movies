const inputField = document.querySelector('#input');
const form = document.querySelector('#form');
const container = document.querySelector('#container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    displayMovies(res.data);
});

const displayMovies = (moviesData) => {
    let i = 0;
    for (let movieData of moviesData) {
        if (movieData.show.image) {
            container.innerHTML +=
                `<div id="movie${i++}" class="con">
        <center><img src = ${movieData.show.image.medium}></center>
        <center><p>${movieData.show.name}</p></center>
        <center><span>Genre: ${movieData.show.genres}</span></center>
    </div>`
        }
    }
}