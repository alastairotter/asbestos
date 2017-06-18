 $("#map").css("width", window.innerWidth);
  $("#map").css("height", window.innerHeight);

  

  if(window.innerWidth < 700 && window.innerWidth < window.innerHeight) {
    
  }



    if(window.innerWidth < 700) {
      var zoom = 2;
      
    }
    else {

      var zoom = 3;
      

    }

//    var mymap = L.map('map').setView([33,0], zoom);
    
    var mymap = L.map('map3', {
     center: [33,0],
     zoom: zoom,
     attributionControl: false
 })

    var Hydda_Full = L.tileLayer('https://api.mapbox.com/styles/v1/alastairotter/cj2yi4f2c00392rjue4j7tlmz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxhc3RhaXJvdHRlciIsImEiOiJjaWc1NjM1dGYwYXV6djJtNjc5dGNqZThrIn0.SWLrLlYJWBdLvyIURec3FA', {
    maxZoom: 18,
    opacity: 0.7,
    animate: false,
    duration: 3
    // attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//    }).addTo(mymap);
        });

    function clicked(e) {
      var layer = e.target;
//            console.log(e);
    }

    // function mouseover(e) {
    //   this.openPopup();
    //
    // }

    function onEachFeature(feature, layer) {
      layer.on({
        click: clicked
      });
//      console.log(feature);
      var popupContent = "<p><span class='country'>" + feature.properties.country + "</span></p>";

      if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupContent;

		}

		layer.bindPopup(popupContent);
}


    var areaStyle = {
    "color": "black",
    // "fillColor": "DarkOrange",
    "weight": 1,
    "opacity": 1,
    "fillOpacity": 0.2
    };

    //years
    // 1766 - 2016
    var colors = ['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'];
    colors = colors.reverse();

   

    function getColor(feature) {
      console.log(feature.properties.year);

          return          feature.properties.year > 2015 ? colors[8] :
          feature.properties.year > 2014 ? colors[7] :
           feature.properties.year > 2007  ? colors[6] :
           feature.properties.year > 2000  ? colors[5] :
          feature.properties.year > 1993  ? colors[4] :
           feature.properties.year > 1950   ? colors[3] :
           feature.properties.year > 1900   ? colors[2] :
           feature.properties.year > 1800   ? colors[1] :
                              colors[0];
    }



var world = L.geoJson(world, {
          "style": function (feature) {
            return {
              "color": "black",
              // "fillColor": "DarkOrange",
              "weight": 1,
              "opacity": 1,
              "fillOpacity": 1,
              // "fillColor": getColor(feature)
              fillColor: "#c4c4c4"
            }
          }
        });
    
    
    

    var country = L.geoJson(countries, {
          "style": function (feature) {
              
              if(feature.country === "Bahrain") { var col = "red"; }
              else { var col = "#91C44A"; }
            return {
              "color": "black",
              // "fillColor": "DarkOrange",
              "weight": 1,
              "opacity": 1,
              "fillOpacity": 0.8,
              // "fillColor": getColor(feature)
              fillColor: col
            }
          },
          onEachFeature: onEachFeature
        });


    // mymap.fitBounds(country.getBounds());


    mymap.scrollWheelZoom.disable();


function addMap() {  
    
mymap.addLayer(world);
mymap.addLayer(country);

mymap.fitBounds(country.getBounds());




}