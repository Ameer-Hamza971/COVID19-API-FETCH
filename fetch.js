class CaseModel {
    constructor(country, cases, countryCode) {
        this.country = country;
        this.cases = cases;
        this.countryCode = countryCode;
    }
}
let countries = []
let CountryData = 0
let casses = 0
let code = ''
let counter = 0
let Country = ''
document.getElementById('click').onclick = (event) => { Country = document.getElementById('country').value; fetcher(Country); document.getElementById('country').value = ''; event.preventDefault(); }
    async function fetcher(count) {
        console.log('started')
        let fetchData = await fetch(`https://api.covid19api.com/dayone/country/${count}/status/confirmed`)
        console.log(fetchData)
        let JSONdata = await fetchData.json()
        CountryData = JSONdata
        code = CountryData[0].CountryCode
        // console.log(JSONdata)
        for (let i = 0; i < CountryData.length; i++) {
            casses += CountryData[i].Cases
            // console.log(casses)
        }

        console.log('CASE', casses)
        countries.push(new CaseModel(Country, casses, code));
        console.log(countries)
        document.getElementById('screen').innerHTML += await `
    <ul class="list">
        <li><h4 class="magneto big">${countries[counter].country.toUpperCase()}</h4></li>
        <li><b class="magneto">CASES: ${countries[counter].cases}</b></li>
        <li class="magneto">COUNTRY CODE: ${countries[counter].countryCode}</li>
    </ul>
    `
        counter++
}
// async function display() {
//     document.getElementById('screen').innerHTML += await `
//     <ul>
//         <li><h4>${countries[counter].country.toUpperCase()}</h4></li>
//         <li><b>${countries[counter].cases}</b></li>
//         <li>${countries[counter].countryCode}</li>
//     </ul>
//     `
//     counter++
// }