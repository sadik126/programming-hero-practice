console.log('hello country')

let loadcountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data))
}

loadcountry();



const displaycountries = (countries) => {
   
    // for (const country of countries) {
    //     console.log(country)
    // }

    countries.forEach(country => {
        console.log('here is ' , country);
    });
}