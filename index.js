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
    //console.log(typeof(totalCases));

    document.querySelector('.total-cases').textContent = (totalCases.toString());
    document.querySelector('.total-deaths').textContent = (totalDeaths.toString());
    document.querySelector('.total-recovered').textContent = (totalRecovered.toString());
  })
  .catch(function(err){
    //console.log("error");
    console.log(err);
  })
}
