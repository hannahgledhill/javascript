'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const handleResponse = function(resp, msg = 'Something went wrong!') {
    if (!resp.ok) throw new Error(`${msg} ${resp.status}`) // fetch only fully rejects when there is no internet connection, not for 404s so we have to handle those ourselves
                
    return resp.json();
};

const renderCountry = function(data, className = "") {
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

const getPosition = function() {
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(new Error(err)));
        navigator.geolocation.getCurrentPosition(resolve, reject); // this is the same as above! will resolve the position and will reject the error :)
    });
}

// const whereAmI = function() {
//     getPosition()
//         .then(pos => {
//             const {latitude: lat, longitude: lng} = pos.coords;

//             return fetch(`https://api.weatherapi.com/v1/current.json?key=b19e0639639f44fa85f172605241909&q=${lat},${lng}&aqi=no`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//             return res.json();
//         })
//         .then(data => {
//             console.log(`You are in ${data.location.region}, ${data.location.country}`);

//             return fetch(`https://restcountries.com/v3.1/name/${data.location.country}`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found (${res.status})`);
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err.message} 💥`))
//         .finally(() => countriesContainer.style.opacity = 1);
// }

const whereAmI = async function() {
    try {
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;
        const countryRes = await fetch(`https://api.weatherapi.com/v1/current.json?key=b19e0639639f44fa85f172605241909&q=${lat},${lng}&aqi=no`); // don't need to handle error here because we did it when we built the promise
        const countryData = await countryRes.json();
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryData.location.country}`); // await will stop the code execution WITHIN the async function until the promise is fulfilled
        if (!res.ok) throw new Error ('Problem getting country');
        
        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);
    }
    catch (err) {
        console.error(err);
        renderCountry(`something went wrong ${err.message}`);
        throw err;
    }
    countriesContainer.style.opacity = 1; // can put this outside catch block so it will always be executed
};

// this is a bit cleaner than using fetch.... maybe?

btn.addEventListener('click', whereAmI);
