window.onload = function(){

getCovidStats();
}

function getCovidStats(){
  fetch('https://corona.lmao.ninja/v2/all')
  .then(function(resp){ return resp.json() })
  .then(function(data){
    let totalCases = data.cases;
    let totalDeaths = data.deaths;
    let totalRecovered = data.recovered;
    //console.log(typeof(totalCases));

    $('.total-cases').text(totalCases.toString());
    $('.total-deaths').text(totalDeaths.toString());
    $('.total-recovered').text(totalRecovered.toString());
  })
  .catch(function(){
    console.log("error");
  })
}
