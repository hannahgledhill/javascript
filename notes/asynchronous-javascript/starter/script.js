'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const handleResponse = function(resp, msg = 'Something went wrong!') {
    if (!resp.ok) throw new Error(`${msg} ${resp.status}`) // fetch only fully rejects when there is no internet connection, not for 404s so we have to handle those ourselves
                
    return resp.json();
};

const renderCountry = function(data, className) {
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = message => countriesContainer.insertAdjacentText('beforeend', message);

const getCountryData = function(country) {

    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => handleResponse(response, 'Country not found')) 
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            if (!neighbour) return;

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // using the return means we don't have to have multiple levels of nesting!!!
        })
        .then(response2 => handleResponse(response2, 'Neighbour not found')) // this is called a flat chain of promises :)
        .then(data2 => renderCountry(data2[0], 'neighbour'))
        .catch(err => { // this catch applies to all errors for the whole chain :))))) 
            console.error(err);
            renderError(`Something went wrong! ${err.message}. Try again...`);
        })
        .finally(() => countriesContainer.style.opacity = 1); // always happens no matter eg. remove loading spinner
};

btn.addEventListener('click', function(){
    getCountryData('portugal');
    // getCountryData('usa');
    // getCountryData('germany');
});