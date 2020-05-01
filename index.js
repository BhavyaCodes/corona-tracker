window.onload = function(){
  getCovidStats();
}

//add commas to numbers and return as string
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCovidStats(){
  fetch('https://corona.lmao.ninja/v2/all')
  .then(function(resp){
    if (!resp.ok) throw new Error(`Status Code Error: ${resp.status}`);
    return resp.json() 
  })
  .then(function(data){
    let totalCases = numberWithCommas(data.cases);
    let totalDeaths = numberWithCommas(data.deaths);
    let totalRecovered = numberWithCommas(data.recovered);

    document.querySelector('.total-cases .card-body').textContent = (totalCases.toString());
    document.querySelector('.total-deaths .card-body').textContent = (totalDeaths.toString());
    document.querySelector('.total-recovered .card-body').textContent = (totalRecovered.toString());
  })
  .catch(function(err){
    console.log(err);
  })

  fetch('https://disease.sh/v2/countries?sort=cases')
  .then(function(resp){
    if (!resp.ok) throw new Error(`all countries Status code Error: ${resp.status}`);
    return resp.json();
  })
  .then(function(data){
    for (let i=0; i<10; i++){
      let country = numberWithCommas(data[i].country);
      let cases = numberWithCommas(data[i].cases);
      let recovered = numberWithCommas(data[i].recovered);
      let deaths = numberWithCommas(data[i].deaths);
      let flagURL = data[i].countryInfo.flag;
      //console.log(country,cases,recovered,deaths);

      const tr = document.createElement('tr')
      tr.innerHTML = `<td class = "country-name"><img class = "flag-img" src="${flagURL}" alt=""> ${country}</td><td>${cases}</td><td>${recovered}</td><td>${deaths}</td>`
      i%2===0 ? tr.classList.add('even-table') : tr.classList.add('odd-table');
      const tbody = document.querySelector('tbody');
      tbody.appendChild(tr);
    }
  })
  .catch(function(err){
    console.log(err);
  })
}

function getCountryStats(country){
  fetch(`https://disease.sh/v2/countries/${country}`)
    .then((resp)=>{
      if (!resp.ok) throw new Error(`Status Code Error: ${resp.status}`);
        return resp.json();
    })
    .then((data)=>{
      const totalCases = data.cases;
    const deaths = data.deaths;
    const p = document.createElement('p');
    p.innerText = `Total Cases: ${totalCases} , Deaths : ${deaths}`;
    const searchSection = document.querySelector('#country-search .container');
    searchSection.appendChild(p);
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
    
}

const searchButton = document.querySelector('.search-btn')
searchButton.addEventListener('click', ()=>{
  getCountryStats(document.querySelector('.search-bar').value);
  console.log("button pressed");
})
//lighter blue : e0fcff
//light blue: 90f2ff