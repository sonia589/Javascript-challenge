// from data.js
var tableData = data;

//TABLE//


//Select table body from html
var UFOtable= d3.select("tbody");

//create function to iterate through data and create table with values
 function buildTable(data){

  //Clear any existing html date-advised by tutor for best practice  
    UFOtable.html("")

    //Append a row to the table for each object and enter values
    data.forEach(function(sightings) {
        // console.log(tableData);
        var row = UFOtable.append("tr");
    
        //Obtain each cell value
        Object.entries(sightings).forEach(function([key, value]) {
        //   console.log(key, value)

        //Append a cell for each value in a row
        var cell = row.append("td");
        cell.text(value);
        });
    });
 }

//SEARCH FILTER//


// //select the button
var button = d3.select("#filter-btn");


// // create event handlers for the button
button.on("click", runFilter);

//call function to grab data values
buildTable(tableData)

// //create function to run filter events
function runFilter(){
    
        // //Prevent the page from refreshing
        d3.event.preventDefault();

        // //select the input field
        var inputField = d3.select("#datetime");

        // //get the value of the input field
        var inputValue = inputField.property("value");

        //define table data to be filtered
        var UFOdata= tableData

        //filter data based in input value
        var UFOdata=UFOdata.filter(sighting=>sighting.datetime===inputValue)
        console.log(UFOdata)

        //Build new tabke based on filter values
        buildTable(UFOdata)
    }








// function (UFOtable){


// }