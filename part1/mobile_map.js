var layer = "terrain";

 var terrain = new L.StamenTileLayer('terrain', { detectRetina: true }),
     toner   = new L.StamenTileLayer('toner', { detectRetina: true }),
     watercolor   = new L.StamenTileLayer('watercolor', { detectRetina: true }),
    googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }),
     googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }),
     googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }),
     googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }),
     OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),
     OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17, attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),
     CartoDarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
subdomains: 'abcd',
maxZoom: 19
}),


     Empty = L.tileLayer('');

 var mmap = L.map('map1', {
     center: [-26.180088724387286, 28.19366455078125],
     zoom:9,
     layers: [OpenStreetMap_BlackAndWhite],
     zoomControl: false,
     scrollWheelZoom: false,
     attributionControl: false,
     dragging: false,
     tap: false
 })

 var baseMaps = {
     "Terrain": terrain,
     "Toner": toner,
     "Watercolor": watercolor,
     "Google Satellite": googleSat,
     "Google Streets": googleStreets,
     "Google Hybrid": googleHybrid,
     "Google Terrain": googleTerrain,
     "Open Street Map B/W": OpenStreetMap_BlackAndWhite,
     "Open Topo Map": OpenTopoMap,
     "Carto Dark Matter": CartoDarkMatter,
   
 };

 
var markers = L.markerClusterGroup({
// spiderfyOnMaxZoom: false,
singleMarkerMode: true,
showCoverageOnHover: false,
maxClusterRadius: 30
});

var fullAsbestosSchools = L.geoJson(asbestosSchools, {
onEachFeature: function (feature, layer) {
 layer.bindPopup(feature.properties.project_name);
}
});


// var allAsbestosSchools = L.geoJson(allAsbestosSchools, {
// onEachFeature: function (feature, layer) {
//  layer.bindPopup(feature.properties.project_name);
// }
// });

var listAllAsbestosSchools = L.geoJson(allAsbestosSchools,{
pointToLayer: function (feature, latlng){

  console.log(feature.properties.reason);
  var col = "#91c44a";
  if(feature.properties.reason === "Partial") { col = "dodgerblue"; }
    return L.circleMarker(latlng, {
        radius: 3,
        fillColor: "#91c44a",
        color: col,
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
    });
}});


// var label = new L.marker([-26.2438784,27.7680592], { opacity: 0.01 }); //opacity may be set to zero
// label.bindPopup("My Label", {permanent: true, className: "my-label", offset: [0, 0] });
// label.addTo(map);

var labels = [
  {
  "lat": -26.2438784,
  "lon": 27.7680592,
  "label": "Soweto"
},
{
  "lat": -25.9975773,
  "lon": 28.1775851,
  "label": "Tembisa"
},
// {
//   "lat": -26.3755897,
//   "lon": 28.097093,
//   "label": "Thokoza"
// },
// {
//   "lat": -26.3757232,
//   "lon": 28.1010867,
//   "label": "Kathlehong"
// },
{
  "lat": -26.3586067,
  "lon": 28.1699281,
  "label": "Vosloorus<br/>Thokoza<br/>Kathlehong"
},
{
  "lat": -25.7139818,
  "lon": 28.3976934,
  "label": "Mamelodi"
},
{
  "lat": -25.4033715,
  "lon": 28.2618919,
  "label": "Hammanskraal"
},
]


var addLabels = function () {
console.log("Add labels");


  labels.forEach( function (d) {
    var myTextLabel = L.marker([d.lat,d.lon], {
        icon: L.divIcon({
            className: 'my-label',   // Set class for CSS styling
            html: d.label,
            offset: [0,0]
        }),
        draggable: false,       // Allow label dragging...?
        zIndexOffset: 1000     // Make appear above other map features
    }).addTo(mmap);
  })

}

// var soweto = [-26.2438784,27.7680592];
//     var myTextLabel = L.marker(soweto, {
//         icon: L.divIcon({
//             className: 'my-label',   // Set class for CSS styling
//             html: "Soweto",
//             offset: [0,0]
//         }),
//         draggable: false,       // Allow label dragging...?
//         zIndexOffset: 1000     // Make appear above other map features
//     }).addTo(map);
//
//     var tembisa = [-25.9975773,28.1775851];
//         var myTextLabel = L.marker(tembisa, {
//             icon: L.divIcon({
//                 className: 'my-label',   // Set class for CSS styling
//                 html: "Tembisa",
//                 offset: [0,0]
//             }),
//             draggable: false,       // Allow label dragging...?
//             zIndexOffset: 1000     // Make appear above other map features
//         }).addTo(map);
//


markers.addLayer(fullAsbestosSchools);
// map.addLayer(listAllAsbestosSchools);
mmap.addLayer(markers);
mmap.fitBounds(markers.getBounds());

// DISABLE INTERACTION
//map.dragging.disable();
//map.touchZoom.disable();
//map.doubleClickZoom.disable();
//map.scrollWheelZoom.disable();
//map.boxZoom.disable();
//map.keyboard.disable();
//if (map.tap) map.tap.disable();
//document.getElementById('map').style.cursor='default';

// setTimeout( function() {
// map.flyTo([-26.2624312, 27.967419], 10, {
// pan: {
//  animate: true,
//  duration: 3
// },
// zoom: {
//  animate: true
// }
// });
// }, 4000);
//
// setTimeout( function() {
// map.flyTo([-26.2090825,27.9965102], 12, {// Production road, Paarlshoop
// pan: {
//  animate: true,
//  duration: 3
// },
// zoom: {
//  animate: true
// }
// });
// }, 8000);
