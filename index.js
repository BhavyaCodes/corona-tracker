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
}
