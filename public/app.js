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
var LayerIds = ['Y2018', 'Y2017', 'Y2016', 'Y2015', 'Y2014', 'Y2013', 'Y2008', 'Y2004', 'Y2002', 'Y1998', 'Y1993' ];

function removeLayers(map) {
  var len = LayerIds.length;
  for (var i = 0; i <= len; i++) {
    var layer = LayerIds[i];
    map.setLayoutProperty(layer, 'visibility', 'none');
    }
};


//EVENT LISTENERS
var currentLayer = "Y2018";
map.on('load', function() {
  map.setLayoutProperty(currentLayer, 'visibility', 'visible');
});

irrigated_div.addEventListener("click", function () {
  var vis = map.getLayoutProperty(currentLayer, 'visibility');
  
  if (vis === 'visible') {
    map.setLayoutProperty(currentLayer, 'visibility', 'none');
  }
  else {
    map.setLayoutProperty(currentLayer, 'visibility', 'visible');
  };
});



yearSelect_div.addEventListener("change", function () {
  var current_index = yearSelect_div.selectedIndex;
  var year = yearSelect_div.options[current_index].text;
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
      currentLayer = layer;    
    }

});