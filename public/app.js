import mapboxgl from 'mapbox-gl';

//Caching the DOM
const timeFrame_select = document.getElementById("timeframe");
const classYear_select = document.getElementById("class-year");

const irrigated_div = document.getElementById("irrigated");
const nonIrrigated_div = document.getElementById("non-irrigated");

const mapWidget_div = document.querySelector(".generic-map-widget");
const legend_div = document.querySelector(".legend");



// CONSTRUCTION OF MAP Object
mapboxgl.accessToken ='pk.eyJ1IjoicGVkcm92aWVpcmFjIiwiYSI6ImNrZnkxODhoNzF3MHYzNnN2MnJ4bWlwZmEifQ.L3drGwHgsf9UeKjP5bzJtg'
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/pedrovieirac/ckfy19zk40s1m19t3xgbvrj59',
  center: [28,-14.50],
  zoom: 7
});