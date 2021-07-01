const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject);// temporary checking for valid response and data parsing
        for (let i = 0; i < towns.length; i++) {
            let cards = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name + ' ' + towns[i].lastname;
            motto.textContent = "motto: " + towns[i].motto;
            yearFounded.textContent = "yearFounded: " + towns[i].yearFounded;
            image.setAttribute('src', towns[i].imageurl);
            image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + " - " + i);

            cards.appendChild(h2);
            cards.appendChild(motto);
            cards.appendChild(yearFounded);
            cards.appendChild(image);

            document.querySelector('div.cards').appendChild(cards);
        }
    });
