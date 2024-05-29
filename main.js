let input = document.querySelector('input');
let button = document.querySelector('button');
let wrapper = document.querySelector('.wrapper');

let perPage = 10;

let clientId = 'uClGfsToZYVRAVgzzmJiF6tTf-cZRFcGisHqItWY7w4';

button.addEventListener('click', () => {
    let query = input.value;
    let API = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}`;
    fetch(API, {
        headers: {
            Authorization: `Client-ID ${clientId}`
        }
    })
    .then(res => res.json())
    .then(data => {
        let array = data.results;

        array.map((v) => {
            let img = document.createElement('img');
            img.src = v.urls.raw;
            wrapper.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });
});
