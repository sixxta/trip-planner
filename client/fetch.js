const buildMarker = require('./marker');
const { map } = require('./index.js')

// const typeArray = ['activities', 'hotels', 'restaurants'];

// typeArray.forEach(function(type){
//   fetch('/api/' + type)
//   .then((response) => {return response.json()})
//   .then(data => {var options = document.getElementById(type + '-choices');
//   data.forEach((d) => {
//     options.appendChild(new Option(d.name, d.name));
// })})
// .catch(console.error);
// })

const fetchActivities = fetch('/api/activities')
.then((response) => {return response.json()})
.then(data => {var options = document.getElementById('activities-choices');
  data.forEach((d) => {
    options.appendChild(new Option(d.name, d.name));
})})
.catch(console.error);

const fetchHotels = fetch('/api/hotels')
.then((response) => {return response.json()})
.then(data => {var options = document.getElementById('hotels-choices');
  data.forEach((d) => {
    options.appendChild(new Option(d.name, d.name));
})})
.catch(console.error);

const fetchRestaurants = fetch('/api/restaurants')
.then((response) => {return response.json()})
.then(data => {var options = document.getElementById('restaurants-choices');
  data.forEach((d) => {
    options.appendChild(new Option(d.name, d.name));
})})
.catch(console.error);

// document.getElementById(`hotels-add`).addEventListener('click',
// function() {
//   var select = document.getElementById('hotels-choices');
//   let list = document.createElement("LI");
//   list.innerText = select.value;
//   document.getElementById('hotels-list').appendChild(list);
//   const button = document.createElement('button');
//   button.setAttribute('class', 'btn');
//   button.innerHTML = 'X';
//   list.append(button);
//   button.onclick = function (){
//     document.getElementById('hotels-list').removeChild(list);
//   };
//   fetch('/api/hotels/' + select.value)
//   .then(response => {
//     return response.json()})
//   .then(result => {
//     console.log(result);
//     buildMarker('hotels', result).addTo(map)})
//   .catch()

// })

// buildMarker('hotel', result.location).addTo(map)

document.getElementById(`restaurants-add`).addEventListener('click',
function() {
  let select = document.getElementById('restaurants-choices')
  let list = document.createElement("LI");
  list.innerText = select.value;
  document.getElementById('restaurants-list').appendChild(list);
  const button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.innerHTML = 'X';
  list.append(button);
  button.onclick = function (){
    document.getElementById('restaurants-list').removeChild(list);
  };
})

document.getElementById(`activities-add`).addEventListener('click',
function() {
  let select = document.getElementById('activities-choices')
  let list = document.createElement("LI");
  list.innerText = select.value;
  document.getElementById('activities-list').appendChild(list);
  const button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.innerHTML = 'X';
  list.append(button);
  button.onclick = function (){
    document.getElementById('activities-list').removeChild(list);
  };
})

module.exports = { fetchActivities, fetchHotels, fetchRestaurants }
