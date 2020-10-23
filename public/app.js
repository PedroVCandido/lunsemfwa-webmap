import mapboxgl from 'mapbox-gl';

//Caching the DOM
const yearSelect_div= document.getElementById("class-year");

const irrigated_div = document.getElementById("irrigated");
const nonIrrigated_div = document.getElementById("non-irrigated");

const mapWidget_div = document.querySelector(".generic-map-widget");
const legend_div = document.querySelector(".legend");



// CONSTRUCTION OF MAP Object
mapboxgl.accessToken ='pk.eyJ1IjoicGVkcm92aWVpcmFjIiwiYSI6ImNrZnkxODhoNzF3MHYzNnN2MnJ4bWlwZmEifQ.L3drGwHgsf9UeKjP5bzJtg'
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/pedrovieirac/ckfy19zk40s1m19t3xgbvrj59',
  center: [29,-14],
  zoom: 7.5,
  minZoom: 4, 
  maxZoom: 14
});


//REMOVE LAYERS
function removeLayers(map) {
  var len = map.getLayers().getArray().length;
  for (var i = 1; i < len; i++) {
    if (map.getLayers().getArray()[i]) {
      map.removeLayer(map.getLayers().getArray()[i]);
    }
  }
};


//EVENT LISTENERS
var current_layer = 2;

irrigated_div.addEventListener("click", function () {
  if (map.getLayers().getArray()[1] == undefined) {
    map.addLayer(current_layer)
    // console.log(JSON.stringify(current_layer));
  }
  else {
    return
  };
});

nonIrrigated_div.addEventListener("click", function () {
  current_layer = map.getLayers().getArray()[1]
  removeLayers(map);
});





// yearSelect_div.addEventListener("change", function () {
//   var current_index = yearSelect_div.selectedIndex;
//   if (yearSelect_div.options[current_index].text == "2013") {
//     if (map.getLayers().getArray()[1] == irrig2013) {
//       return
//     }
//     else {
//       removeLayers(map);
//       map.addLayer(irrig2013);
//     }
//   }

// else {
//     return
//   }

// });