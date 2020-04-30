window.onload = function(){

getCovidStats();
}

function getCovidStats(){
  fetch('https://corona.lmao.ninja/v2/all')
  .then(function(resp){
    if (!resp.ok) throw new Error(`Status Code Error: ${resp.status}`);
    return resp.json() 
  })
  .then(function(data){
    let totalCases = data.cases;
    let totalDeaths = data.deaths;
    let totalRecovered = data.recovered;

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
      let country = data[i].country;
      let cases = data[i].cases;
      let recovered = data[i].recovered;
      let deaths = data[i].deaths;
      console.log(country,cases,recovered,deaths);

      const tr = document.createElement('tr')
      tr.innerHTML = `<td>${country}</td><td>${cases}</td><td>${recovered}</td><td>${deaths}</td>`
      i%2===0 ? tr.classList.add('even-table') : tr.classList.add('odd-table');
      const tbody = document.querySelector('tbody');
      tbody.appendChild(tr);
    }
  })
  .catch(function(err){
    console.log(err);
  })
}

//lighter blue : e0fcff
//light blue: 90f2ff