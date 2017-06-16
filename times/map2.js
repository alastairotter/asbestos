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

 var map = L.map('map', {
     center: [-26.180088724387286, 28.19366455078125],
     zoom:9,
     layers: [OpenStreetMap_BlackAndWhite],
     zoomControl: true,
     scrollWheelZoom: false,
     attributionControl: false
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




var listAllAsbestosSchools = L.geoJson(allAsbestosSchools,{
    onEachFeature: function (feature, layer) {
 layer.bindPopup(feature.properties.school);
},
pointToLayer: function (feature, latlng){

  console.log(feature.properties.reason);
  var col = "red";
  if(feature.properties.reason === "Partial") { col = "black"; }
    return L.circleMarker(latlng, {
        radius: 5,
        fillColor: col,
        color: "#fff",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
        "shape-rendering": "crispEdges"
    });
}});




var labels = [
  {
  "lat": -26.2438784,
  "lon": 27.6980592,
  "label": "Soweto"
},
{
  "lat": -25.9975773,
  "lon": 28.2775851,
  "label": "Tembisa"
},

{
  "lat": -26.4086067,
  "lon": 28.2699281,
  "label": "Vosloorus<br/>Thokoza<br/>Kathlehong"
},
{
  "lat": -25.7139818,
  "lon": 28.4976934,
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
    }).addTo(map);
  })

}



map.addLayer(listAllAsbestosSchools);
//markers.addLayer(listAllAsbestosSchools);
//// map.addLayer(listAllAsbestosSchools);
//map.addLayer(markers);
map.fitBounds(map.getBounds());

addLabels(); 

console.log(map.getZoom());


$(".leaflet-control-zoom-in").on("click", function () { 
    if(map.getZoom() !== 9 ) { 
        $(".my-label").css("opacity", 0);
    }
    else { 
        $(".my-label").css("opacity", 1);
    }
})

$(".leaflet-control-zoom-out").on("click", function () { 
    if(map.getZoom() !== 9 ) { 
        $(".my-label").css("opacity", 0);
    }
    else { 
        $(".my-label").css("opacity", 1);
    }
})
