var selData = d3.select("#selDataset");
// get data of names list to populate
d3.json("data.json").then((data) => {
    data.state.forEach((name) => {
        selData
        .append("option")
        .text(name)
        .property("value"); 
    });
var namesID = data.state[0]
// Use the first sample from the list to build the initial plots, 
// taking updatPlotly function name from index.html at line 25
updatePlotly(namesID);
});

// Update the restyled plot's values
function updatePlotly(newdata) {

  d3.json("data.json").then((chartdata) => {
    //console.log to verify file was read
    console.log(chartdata);
    var statedata = chartdata.data;
    //add filter for ids
    var filteredData =statedata.filter(md => md.state == newdata);
    // fetch the first element
    var results = filteredData[0];
    
      var valuex = results.values.map(x => x)
      var labels = results.ids.map(x => `${x}`)
     
      console.log(valuex);
      console.log(labels);
      // console.log(hovers);

      var trace1 = {
        x: valuex.reverse(),
        y: labels.reverse(),
        // text: valuex.reverse(),
        labels: {
          step: 1
        },
        type: "bar",
        orientation: "h"
    };
    
    //Bar Chart
    var barData = [trace1];
    var layout = {
      title: "Home Values By State",
      xaxis:{title:"Number of Houses in Price Range"},
      autosize: true,
      width: 900,
      height: 400,
      margin: {
        l: 190,//left margin
        r: 80,//right margin
        b: -10,//bottom margin
        t: -200,//top margin
        pad: 1
      },
  // paper_bgcolor: '#7f7f7f',
  // plot_bgcolor: '#c7c7c7'
        };
  
    Plotly.newPlot("bar", barData,layout);
    }
    
);
 
}