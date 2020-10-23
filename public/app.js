
//Caching the DOM
const timeFrame_select = document.getElementById("timeframe");
const classYear_select = document.getElementById("class-year");

const irrigated_div = document.getElementById("irrigated");
const nonIrrigated_div = document.getElementById("non-irrigated");

const mapWidget_div = document.querySelector(".generic-map-widget");
const legend_div = document.querySelector(".legend");


//EVENT LISTENERS
var current_layer = irrig2018;

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
  // console.log("current layer:" + JSON.stringify(map.getLayers().getArray()[1]))
  current_layer = map.getLayers().getArray()[1]
  // map.removeLayer(irrig2018);
  // map.removeLayer(irrig2013);
  removeLayers(map);
});


classYear_select.addEventListener("change", function () {
  var current_index = classYear_select.selectedIndex;
  if (classYear_select.options[current_index].text == "2013") {
    if (map.getLayers().getArray()[1] == irrig2013) {
      return
    }
    else {
      removeLayers(map);
      map.addLayer(irrig2013);
    }
  }

  else if (classYear_select.options[current_index].text == "2018") {
    if (map.getLayers().getArray()[1] == irrig2018) {
      return
    }
    else {
      removeLayers(map);
      map.addLayer(irrig2018)
    }
  }

  else {
    return
  }

});


function removeLayers(map) {
  var len = map.getLayers().getArray().length;
  for (i = 1; i < len; i++) {
    if (map.getLayers().getArray()[i]) {
      map.removeLayer(map.getLayers().getArray()[i]);
    }
  }
};


// CONSTRUCTION OF OL LAYER OBJECTS
//TODO: Implement creation of OL objects in more mature and less hard-coded way
var irrigSource2018 = new ol.source.ImageWMS({
  url: "http://localhost:8080/geoserver/webmap/wms",
  params: {
    'LAYERS': 'webmap:Irrigation2018',
    'SLD_BODY': sldBody,
  },
  ratio: 1,
  serverType: 'geoserver'
});

var irrig2018 = new ol.layer.Image({
  source: irrigSource2018,
  "className": "Irrigation"
});

var irrigSource2013 = new ol.source.ImageWMS({
  url: "http://localhost:8080/geoserver/webmap/wms",
  params: {
    'LAYERS': 'webmap:Irrigation2013',
    'SLD_BODY': sldBody,
  },
  ratio: 1,
  serverType: 'geoserver'
});

var irrig2013 = new ol.layer.Image({
  source: irrigSource2013,
  "className": "Irrigation"
});

var ESRI_sat = new ol.layer.Tile({
  source: new ol.source.XYZ({
    attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
      'rest/services/World_Imagery/MapServer">ArcGIS</a>',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Imagery/MapServer/tile/{z}/{y}/{x}'
  })
})



// OL ESSENTIAL MAP OBJECTS 
var layers = [
  // new ol.layer.Tile({
  //   source: new ol.source.OSM()
  // }), 
  ESRI_sat,
  irrig2018,
];

var map = new ol.Map({
  layers: layers,
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([29, -14]),
    zoom: 9
  })
});

// myExtent = ;

// CENTERING MAP TO LAYERS ON STARTUP
// map.getView().setCenter(irrig2013.getExtent().getCenter([28,-15,29,-13]));
// map.getView().fit([28,-15,29,-13]);






p = {};
