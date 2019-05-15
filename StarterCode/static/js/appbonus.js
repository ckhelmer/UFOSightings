dropdown = d3.select('.dropdown')

//loop through data with a forEach;
tableData.forEach(function(whatever){
  //append a new row for each entry
  const dropdownButton = dropdown.append('button');
  dropdownButton.attr('class', 'dropdown-item').attr('type', 'button')
  //populate the rows with data (with a nested forEach)
  Object.entries(whatever).forEach(function([key, value]){
       const cell = tablerow.append('td').text(value);
  })
})