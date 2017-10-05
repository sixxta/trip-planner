const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');
const fetch = require('./fetch');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2l4eHRhIiwiYSI6ImNqOGMzNXYwczA1MDUyeHJsaHk4empoankifQ.totkL8Moz5WvblnyxSZm6g'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/dark-v9' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);
marker.addTo(map);

document.getElementById(`hotels-add`).addEventListener('click',
function() {
  var select = document.getElementById('hotels-choices');
  let list = document.createElement("LI");
  list.innerText = select.value;
  document.getElementById('hotels-list').appendChild(list);
  const button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.innerHTML = 'X';
  list.append(button);
  button.onclick = function (){
    document.getElementById('hotels-list').removeChild(list)
  };
  fetch('/api/hotels/' + select.value)
  .then(response => {
    return response.json()})
  .then(result => {
    console.log(result);
    buildMarker('hotels', result).addTo(map)})
  .catch()

})

// document.getElementById(`restaurants-add`).addEventListener('click',
// function() {
//   var select = document.getElementById('restaurants-choices');
//   let list = document.createElement("LI");
//   list.innerText = select.value;
//   document.getElementById('restaurants-list').appendChild(list);
//   const button = document.createElement('button');
//   button.setAttribute('class', 'btn');
//   button.innerHTML = 'X';
//   list.append(button);
//   button.onclick = function (){
//     document.getElementById('restaurants-list').removeChild(list)
//     // fetch('/api/hotels/' + select.value)
//     // .then(response => {
//     //   return response.json()})
//     // .then(result => {
//     //   mapId.remove()})
//   };
//   fetch('/api/restaurants/' + select.value)
//   .then(response => {
//     return response.json()})
//   .then(result => {
//     console.log(result);
//     buildMarker('restaurants', result).addTo(map)})
//   .catch()

// })

// document.getElementById(`activities-add`).addEventListener('click',
// function() {
//   var select = document.getElementById('activities-choices');
//   let list = document.createElement("LI");
//   list.innerText = select.value;
//   document.getElementById('activities-list').appendChild(list);
//   const button = document.createElement('button');
//   button.setAttribute('class', 'btn');
//   button.innerHTML = 'X';
//   list.append(button);
//   button.onclick = function (){
//     document.getElementById('activities-list').removeChild(list)
//     // fetch('/api/activities/' + select.value)
//     // .then(response =>{
//     //   return response.json()})
//     // .then(result =>{
//     //   mapId.remove()})
//   };
//   fetch('/api/activities/' + select.value)
//   .then(response => {
//     return response.json()})
//   .then(result => {
//     console.log(result);
//     buildMarker('activities', result).addTo(map)})
//   .catch()

// })

module.exports = { map, marker, mapboxgl };
