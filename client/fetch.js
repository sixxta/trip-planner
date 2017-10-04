const buildMarker = require('./marker');

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


document.getElementById(`hotels-add`).addEventListener('click',
function() {
  let select = document.getElementById('hotels-choices')
  let list = document.createElement("LI");
  list.innerText = select.value;
  document.getElementById('hotels-list').appendChild(list);
  const button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.innerHTML = 'X';
  list.append(button);
  button.onclick = function (){
    document.getElementById('hotels-list').removeChild(list);
  };
})

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
