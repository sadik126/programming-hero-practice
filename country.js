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
   let countryname = document.getElementById('countries')
    countries.forEach(country => {
        // console.log('here is ' , country.name);
        let div = document.createElement('div');
        div.classList.add('country');
        // let h3 = document.createElement('h3')
        // h3.innerText = `${ country.name.common}`;
        // let p = document.createElement('p');
        // p.innerText = `official name :${country.name.official}`
        // // let button = document.createElement('button');
        // // button.innerText = `display all`;
        // div.appendChild(h3);
        // div.appendChild(p);
        // // div.appendChild(button);
        
        
        
        div.innerHTML=`
        <h3>${ country.name.common}</h3>
        <p>${country.name.official}</p>
        <button onclick="displaycountry('${ country.name.common}')">display</button>
        `;
        countryname.appendChild(div);
    });
}


const displaycountry = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => country(data[0]))
    console.log(url);
}

let country = (showcountry)=>{
   console.log(showcountry);
   let details = document.getElementById('country-detail')
   details.innerHTML = `
   <h2>name: ${showcountry.name.common}</h2>
   <p>population: ${showcountry.population}</p>
   <p>capital: ${showcountry.capital}</p>
   `
   
}