fetch("./directory.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    const business = jsObject.business;
    console.table(jsObject);

    for (let i = 0; i < business.length; i++) {
      
        let card = document.createElement("div");
        let info = document.createElement("section");
        let image = document.createElement("figure");

        let businessName = document.createElement("h3");
        let address = document.createElement("h4");
        let phoneNumbers = document.createElement("p");
        let logo = document.createElement("img");

        businessName.textContent = business[i].businessName;
        address.textContent = business[i].address;
        phoneNumbers.textContent = "Phone Number: " + business[i].phoneNumbers;

        logo.setAttribute("src", "images/" + business[i].logo);
        logo.setAttribute("alt", business[i].businessName);
        logo.setAttribute("width", "400");
        logo.setAttribute("height", "200");

        info.appendChild(businessName);
        info.appendChild(address);
        info.appendChild(phoneNumbers);

        card.appendChild(info);
        image.appendChild(logo);
        card.appendChild(image);

        document.getElementById("cards").appendChild(card);
      
    }
  });
