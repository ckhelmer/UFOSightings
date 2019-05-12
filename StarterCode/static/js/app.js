// from data.js
const tableData = data;

//refer to the table body
const tablebody = d3.select('tbody');

//loop through data with a forEach;
tableData.forEach(function(whatever){
    //append a new row for each entry
    const tablerow = tablebody.append('tr');
    //populate the rows with data (with a nested forEach)
    Object.entries(whatever).forEach(function([key, value]){
        const cell = tablerow.append('td').text(value);
    })
})

//filters
//declare event variables

const button = d3.select('button');
let inputElement = d3.select('.filter').text();
// let inputValue = inputElement.property("value");
const cellglobal = d3.select('td');

function handleDate(event) {
    //prevent refreshing
    d3.event.preventDefault();
    console.log(inputElement);
    
    // if (input in cellglobal) {
    //     console.log(input);
    //     console.log(cellglobal);
    // }
}

button.on('click', handleDate);