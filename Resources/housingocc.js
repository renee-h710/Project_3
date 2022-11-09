// code for bringing in url 
let url = 'https://Real-Estate-Data.azurewebsites.net'
// code for choosing which data - just the occupancy df 
let occupancySet = '/api/v1.0/occupancy_per'

query_url = url + occupancySet;



function init() {
  //Create mean startup plot for site
  vacantList = [];
  occupiedList = [];
  
  d3.json(query_url).then( function(data){
  states = data.state
  vacantList = data.vacant
  occupiedList = data.occupied
  })
  occMean = d3.mean(occupiedList)
  vacMean = d3.mean(vacantList)

  var data = [{
    values: [occMean, vacMean],
    labels: ['Occupied', 'Vacant'],
    type: 'pie',
    name: 'Average Houses Occupied vs. Vacant',

  }];

  

//   //loop through each state to get sum and count of occupied or vacant list
//   for (let i = 0; i<occupied.length;i++){
//     row = occupied[i];

//     total += row[metric];
//     count += row[metric];
//   }
//   // Calculate the average value
//   let meanValue = total / count;

//   // Return the calculated average
//   return meanValue;
// }

// //Build the plot
// function createPie(occupiedAverage, vacantAverage){
//   var data = [{
//     values: [occupiedAverage, vacantAverage],
//     labels: ['Occupied', 'Vacant'],
//     type: 'pie',
//     name: 'Average Houses Occupied vs. Vacant',

//   }];
  

// let layout = {
//   title: "Average Occupancy vs Vacant Units in US" 
// };


//   Plotly.newPlot('pie', data, layout);


// }


