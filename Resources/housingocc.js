// code for bringing in url 
let url = 'https://Real-Estate-Data.azurewebsites.net'
// code for choosing which data - just the occupancy df 
let occupancySet = '/api/v1.0/occupancy_per'

query_url = url + occupancySet;



function init() {
  //Create mean startup plot for site
  var occupiedList= [];
  var vacantList= [];

  // get data from api
  d3.json(query_url).then( function(data){
  console.log(data)
  // states = data['state']
   occupiedList = data.map(function(item){
    return item['occupied'];
   });
   vacantList = data.map(function(item){
    return item.vacant;
   });

    // console.log(occupiedList)
    // console.log(vacantList)
   
    //Create mean values using data 
    occMean = d3.mean(occupiedList)
    vacMean = d3.mean(vacantList)
    // console.log(occMean)
    // console.log(vacMean)

      //plot data
    var data = [{
      values: [occMean, vacMean],
      // values: [1, 2],
      labels: ['Occupied', 'Vacant'],
      type: 'pie',
      name: 'Average Houses Occupied vs. Vacant',
  
    }];
  
    //create plot
    Plotly.newPlot("pie", data);
  });



  
}

init();
