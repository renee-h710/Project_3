// code for bringing in url 
let url = 'Real-Estate-Data.azurewebsites.net'
// code for choosing which data - just the occupancy df 
let occupancySet = '/api/v1.0/occupancy_per'

query_url = url + occupancySet;

//Pull data from API and transform into lists
function getData(query_url){
  let response = fetch(query_url)
  let states = response.json();
  return states;
}


let occupiedField = "occupied";
let vacantField = "vacant";

//Get averages of data to use for plot, using metric for either the occupied or vacant list
function getMean(states, metric){
  // Initialize variables to increment
  let count = 0;
  let total = 0;
  

  //loop through each state to get sum and count of occupied or vacant list
  for (let i = 0; i<states.length;i++){
    row = states[i];

    total += row[metric];
    count += row[metric];
  }
  // Calculate the average value
  let meanValue = total / count;

  // Return the calculated average
  return meanValue;
}

//Build the plot
function createPie(occupiedAverage, vacantAverage){
  var data = [{
    values: [occupiedAverage, vacantAverage],
    labels: ['Occupied', 'Vacant'],
    type: 'pie',
    name: 'Average Houses Occupied vs. Vacant',
    hoverinfo: 'label+value'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
// Title 
let layout = {
  title: "Average Occupancy vs Vacant Units in US" 
};


  Plotly.newPlot('pie', data, layout);


}

//Create plot for site
createPie(getMean(getData(query_url),occupiedField),getMean(getData(query_url),vacantField));

  