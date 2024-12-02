let body="";

fetch("https://restcountries.com/v3.1/all ")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        console.log(element);
        body += `   <div class="card card-body" style="width: 18rem;">
                        <img src="${element.flags.png}" class="card-img-top img" alt="...">
                        <div class="card-body">
                            <h5 class="">${element.name.common}</h5>
                            <p class="card-text">Capital: ${element.capital}</p>
                            <p class="card-text">Reagan: ${element.region}</p>
                            <p class="card-text">Population: ${element.population}</p>
                            <a href="${element.maps.googleMaps}" class="btn btn-primary">View on Google Map</a>
                        </div>
                    </div>`;
    });
    document.getElementById("card-section").innerHTML = body;
})
console.log(body);

document.getElementById("search-btn").addEventListener("click", searchCountry);


function searchCountry() {
    let userInput = document.getElementById("search-input").value.trim().toLowerCase();
    console.log(userInput);

    let body = "";

    fetch(`https://restcountries.com/v3.1/all`) 
        .then(response => response.json()) 
        .then(data => { 
            // Filter countries whose names start with the given letter
            const filteredCountries = data.filter(element => 
                element.name.official.toLowerCase().startsWith(userInput)
            );
            // Check if any countries matched the search
            if (filteredCountries.length === 0) {
                body = `<p>No countries found starting with "${userInput}"</p>`;
            } else {
                // Generate HTML for the matching countries
                filteredCountries.forEach(element => {
                    console.log(element);
                    body += `
                        <div class="card" style="width: 18rem;">
                            <img src="${element.flags.png}" class="card-img-top" alt="Flag of ${element.name.official}">
                            <div class="card-body">
                                <h5 class="card-title">${element.name.official}</h5>
                                <p class="card-text">Capital: ${element.capital ? element.capital[0] : "N/A"}</p>
                                <p class="card-text">Region: ${element.region}</p>
                                <p class="card-text">Population: ${element.population.toLocaleString()}</p>
                                <a href="${element.maps.googleMaps}" class="btn btn-primary" target="_blank">View on Google Map</a>
                            </div>
                        </div>`;
                });
            }
            // Update the DOM
            document.getElementById("card-section").innerHTML = body;
        })
}

