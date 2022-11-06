// code for bringing in url 

// code for choosing the occupancy df 
// Maybe. see Week 10. Day 3. Activity 11

// Code for pie chart - from class activity week 14. Day 3. Activity 10. 
function init() {
  let data = [{
    values: australia,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// Code for dropdown menu from class activity week 14. Day 3. Activity 10. 
// On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a letiable
//   let dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   let data = [];

//   if (dataset == 'australia') {
//       data = australia;
//   }
//   else if (dataset == 'brazil') {
//       data = brazil;
//   }
//   else if (dataset == 'uk') {
//       data = uk;
//   }
//   else if (dataset == 'mexico') {
//     data = mexico;
//   }
//   else if (dataset == 'singapore') {
//       data = singapore;
//   }
//   else if (dataset == 'southAfrica') {
//     data = southAfrica;
//   }
// // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();
