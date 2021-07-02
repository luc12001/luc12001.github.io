const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
  
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    console.table(jsonObject);

    for (let i = 0; i < towns.length; i++) {
      if (i == 0 || i == 2 || i == 6) {
        let card = document.createElement("div");
        let info = document.createElement("section");
        let image = document.createElement("figure");

        let name = document.createElement("h2");
        let motto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement("p");
        let photo = document.createElement("img");

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        currentPopulation.textContent =
          "Population: " + towns[i].currentPopulation;
        averageRainfall.textContent =
          "Annual Rain Fall: " + towns[i].averageRainfall;

        photo.setAttribute("src", "images/" + towns[i].photo);
        photo.setAttribute("alt", towns[i].name);
        photo.setAttribute("width", "400");
        photo.setAttribute("height", "200");

        info.appendChild(name);
        info.appendChild(motto);
        info.appendChild(yearFounded);
        info.appendChild(currentPopulation);
        info.appendChild(averageRainfall);

        card.appendChild(info);
        image.appendChild(photo);
        card.appendChild(image);

        document.getElementById("cards").appendChild(card);
      }
    }
  });
