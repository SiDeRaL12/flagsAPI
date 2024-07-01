
async function countries() {

    try {
        const API_URL = `https://restcountries.com/v3.1/all`;
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Assume we want the names of all countries
        let countryData = data.map(country => ({
            name: country.name.common,
            googleMaps: country.maps.googleMaps,
            flag: country.flags.png
        }));

        generateUI(countryData);
    } catch (error) {
        console.log(error);
    }
}

function generateUI(countryData) {
    const output = document.getElementById('countrynames');
    
        output.innerHTML = countryData.map(country => ` <div class="border p-2">
            <img src=${country.flag} alt= "Flag of ${country.name} class="w-16 h-10 ">
            <p>${country.name}</p>
            <a href="${country.googleMaps}" target="_blank" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View on Google Maps</a>
        </div>`).join('');

}
