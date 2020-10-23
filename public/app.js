// import mapboxgl from 'mapbox-gl';

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
  var len = 11;
  var visibility = map.getLayoutProperty(layer, 'visibility');

  for (var i = 1; i < len; i++) {
    if (map.getLayer().getArray()[i]) {
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


var toggleableLayerIds = ['contours', 'museums'];

yearSelect_div.addEventListener("change", function () {
  var current_index = yearSelect_div.selectedIndex;
  var year = yearSelect_div.selectedIndex.text;
  var layer = "Y"+ year;
  var visibility = map.getLayoutProperty(layer, 'visibility');
  
  if (visibility === 'visible') {
      return;
  }

  // else if (yearSelect_div.options[current_index].text == "2018") {
  //     return
  //   }
  else {
      removeLayers(map);
      map.setLayoutProperty(layer,'visibility', 'visible');
    }

});