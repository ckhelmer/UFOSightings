
const dates = [];
const cities = [];
const states = [];
const countries = [];
const shapes = [];
const durations = [];
const keys = [];

//loop through data with a forEach;
data.forEach(function(dataset){
    var date = dataset.datetime;
    if (dates.includes(date)) {
//  DO NOTHING
    } else {
      dates.push(date);
    }
      
})
data.forEach(function(dataset){
  var city = dataset.city;
  if (cities.includes(city)) {
//  DO NOTHING
  } else {
    cities.push(city);
  }
    
})

data.forEach(function(dataset){
  var state = dataset.state;
  if (states.includes(states)) {
//  DO NOTHING
  } else {
    states.push(state);
  }
    
})

data.forEach(function(dataset){
  var country = dataset.country;
  if (countries.includes(country)) {
//  DO NOTHING
  } else {
    countries.push(country);
  }
    
})
data.forEach(function(dataset){
  var shape = dataset.shape;
  if (shapes.includes(shape)) {
//  DO NOTHING
  } else {
    shapes.push(shape);
  }
    
})

data.forEach(function(dataset){
  var duration = dataset.durations;
  if (durations.includes(duration)) {
//  DO NOTHING
  } else {
    durations.push(duration);
  }
    
})

//Populate the dropdowns with the arrays


dates.forEach(function(x) {
    let dropdown = d3.select("#datedropdown");
    let db = dropdown.append('button').text(x);
    db.attr('class', 'dropdown-item');
    db.attr('type', 'button');
})

cities.forEach(function(x) {
  let dropdown = d3.select("#citydropdown");
  let db = dropdown.append('button').text(x);
   db.attr('class', 'dropdown-item');
   db.attr('type', 'button');
})

states.forEach(function(x) {
  let dropdown = d3.select("#statedropdown");
  let db = dropdown.append('button').text(x);
  db.attr('class', 'dropdown-item');
  db.attr('type', 'button');
})

countries.forEach(function(x) {
  let dropdown = d3.select("#countrydropdown");
  let db = dropdown.append('button').text(x);
  db.attr('class', 'dropdown-item');
  db.attr('type', 'button');
})

shapes.forEach(function(x) {
  let dropdown = d3.select('#shapedropdown');
  let db = dropdown.append('button').text(x);
  db.attr('class', 'dropdown-item');
  db.attr('type', 'button');
})

durations.forEach(function(x) {
  let dropdown = d3.select('#durationdropdown');
  let db = dropdown.append('button').text(x);
  db.attr('class', 'dropdown-item');
  db.attr('type', 'button');
})

/////////////////POPULATE THE TABLES//////////////////

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
