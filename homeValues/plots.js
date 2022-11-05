// Create an array of each state's numbers
let Alabama = Object.values(data.Alabama);
let Alaska = Object.values(data.Alaska);
let Arizona = Object.values(data.Arizona);
let Arkansas = Object.values(data.Arkansas);
let California = Object.values(data.California);
let Colorado = Object.values(data.Colorado);

// Create an array of category labels
let labels = Object.keys(data.Alabama);

// Display the default plot
function init() {
  let data = [{
    values: Alabama,
    labels: labels,
    type: "bar"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the state's data
  let data = [];

  if (dataset == 'Alabama') {
      data = Alabama;
  }
  else if (dataset == 'Alaska') {
      data = Alaska;
  }
  else if (dataset == 'Arizona') {
      data = Arizona;
  }
  else if (dataset == 'Arkansas') {
    data = Arkansas;
  }
  else if (dataset == 'California') {
      data = California;
  }
  else if (dataset == 'Colorado') {
    data = Colorado;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "values", [newdata]);
}

init();
