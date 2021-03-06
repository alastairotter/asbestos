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
// StamenTonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
// attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// subdomains: 'abcd',
// minZoom: 0,
// maxZoom: 20,
// ext: 'png'
// }),

     Empty = L.tileLayer('');

 var map = L.map('map', {
     center: [-26.180088724387286, 28.19366455078125],
     zoom:9,
     layers: [CartoDarkMatter],
     zoomControl: true,
     scrollWheelZoom: false,
     attributionControl: false
 })
 
 if(window.innerWidth < 700) { 
    map.removeControl(map.zoomControl);
 }

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
    //  "Stamen Toner Lite": StamenTonerLite
     // "Empty": Empty
 };

 // var muniLayer = L.geoJson(municipalities, {
 //
 //         weight: 2,
 //         opacity: 1,
 //         color: 'white',
 //         dashArray: '3',
 //         fillOpacity: 0.7,
 //         fillColor: 'dodgerblue'
 //
 // });
 //       .addTo(map);
 //
 // var layers = {
 //     "Municipalities": muniLayer
 //
 // }



 // L.control.layers(baseMaps, layers).addTo(map);
// 				L.control.layers(baseMaps).addTo(map);


//        map.addLayer(new L.StamenTileLayer(layer, {
//            detectRetina: true
//        }));

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
    onEachFeature: function (feature, layer) {
 layer.bindPopup(feature.properties.school);
},
pointToLayer: function (feature, latlng){

  console.log(feature.properties.reason);
  var col = "crimson";
  if(feature.properties.reason === "Partial") { col = "blue"; }
    return L.circleMarker(latlng, {
        radius: 5,
        fillColor: col,
        color: "#000",
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
    }).addTo(map);
  })

}



markers.addLayer(fullAsbestosSchools);


function addMap1 () { 
    map.removeLayer(listAllAsbestosSchools);
    map.addLayer(markers);
    map.fitBounds(markers.getBounds());
}

addMap1();

function addMap2 () {
  map.removeLayer(markers);
  addLabels();

  map.flyTo([-26.180088724387286, 28.19366455078125], 9, {
        pan: {
         animate: true,
         duration: 3
        },
        zoom: {
         animate: true
        }
        });

  map.addLayer(listAllAsbestosSchools);
  // map.fitBounds(all_schools.getBounds());
  allSchools = true;
  $(".maplegend").fadeIn(1000);


}

