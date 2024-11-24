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


function searchCountry(){
    let userInput = document.getElementById("search-input").value;
        console.log(userInput);
    
    let body = "";
    
    fetch(`https://restcountries.com/v3.1/name/${userInput}`) 
.then(response => response.json()) 
.then(data => { 
// Code to update the DOM with country details 
    data.forEach(element => {
        console.log(element);
        body += `   <div class="card" style="width: 18rem;">
                        <img src="${element.flags.png}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="">${element.name.official}</h5>
                            <p class="card-text">Capital: ${element.capital}</p>
                            <p class="card-text">Reagan: ${element.region}</p>
                            <p class="card-text">Population: ${element.population}</p>
                            <a href="${element.maps.googleMaps}" class="btn btn-primary">View on Google Map</a>
                        </div>
                    </div>`;
        });
        document.getElementById("card-section").innerHTML = body;
    }); 
console.log(body);
}

