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
const inputElement = d3.select('.form-control');

const cellglobal = d3.selectAll('td');

function handleDate(event) {
    //prevent refreshing
    d3.event.preventDefault();
    d3.selectAll('tbody tr').remove();
    let inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredDate = tableData.filter(date => date.datetime == inputValue);
    console.log(filteredDate);
    filteredDate.forEach(function(a) {
        const tablerow = tablebody.append('tr');
        Object.entries(a).forEach(function([key, value]) {
            const cell = tablerow.append('td').text(value);
        })
    })
}    

button.on('click', handleDate);