var height = window.innerHeight,
  midpoint = window.innerHeight/2,
  twoThirds = (window.innerHeight/3) * 2.
  width = window.innerWidth,
  half = window.innerWidth/2;

var allSchools = false;


// CLICK EVENTS

$(".maplink1").click( function() {
  if(allSchools) {

  }

  map.flyTo([-26.2090825,27.9965102], 11, {// Production road, Paarlshoop
        pan: {
         animate: true,
         duration: 3
        },
        zoom: {
         animate: true
        }
        });
})



$(".maplink2").click( function() {
  map.flyTo([-26.180088724387286, 28.19366455078125], 9, {
        pan: {
         animate: true,
         duration: 3
        },
        zoom: {
         animate: true
        }
        });
})


$(".allschools").click( function () {
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

  var all_schools = map.addLayer(listAllAsbestosSchools);
  // map.fitBounds(all_schools.getBounds());
  allSchools = true;
  $(".maplegend").fadeIn(1000);


})


// SIZING ELEMENTS

// $()



// WAYPOINTS

//var logopoint = new Waypoint({
//  element: document.getElementById('top'),
//  handler: function(direction) {
//    if(direction === "down") {
//      $(".logoimage").fadeOut(1000);
//
//    }
//    else {
//      $(".logoimage").fadeIn(1000);
//    }
//  },
//  offset: height
//  })

//var videopoint = new Waypoint({
//  element: document.getElementById('video1'),
//  handler: function(direction) {
//    if(direction === "down") {
//      $(".video1").fadeIn(6000);
//      document.getElementById('video1container').play();
//
//    }
//    else {
//      $(".video1").fadeOut(1000);
//    }
//  },
//  offset: height
//  })


  var schoolpoint = new Waypoint({
    element: document.getElementById('map1'),
    handler: function(direction) {
      if(direction === "down") {
        $(".video1").fadeOut(100);
        $("#map").delay(500).fadeTo(2000,1);

      }
      else {
        $("#map").fadeTo(2000,0);
        $(".maplegend").fadeOut(100);
        $(".video1").delay(500).fadeIn(1000);
        document.getElementById('video1container').play();
      }
    },
    offset: twoThirds
    })
  
//   var schooltable = new Waypoint({
//    element: document.getElementById('schools-table'),
//    handler: function(direction) {
//      if(direction === "down") {
//        $("#map").fadeOut(100);
//        $(".maplegend").fadeOut(100);
//        $(".schools-table").delay(500).fadeTo(2000,1);
//
//      }
//      else {
//        $(".schools-table").fadeTo(2000,0);
//        $(".maplegend").delay(500).fadeIn(100);
//        $("#map").delay(500).fadeIn(1000);
////        document.getElementById('video1container').play();
//      }
//    },
//    offset: twoThirds
//    })

  
  
  // SCHOOLS TABLE
  var bwidth = $("#box").width(),
      bheight = $("#box").height(); 

console.log(bwidth);
$(".schools-table iframe").width(bwidth-10).height(bheight - 70);



    // var schoolpoint2 = new Waypoint({
    //   element: document.getElementById('map2'),
    //   handler: function(direction) {
    //     if(direction === "down") {
    //       // $(".video1").fadeOut(100);
    //       // $("#map").delay(500).fadeTo(2000,1);
    //       map.flyTo([-26.2090825,27.9965102], 12, {// Production road, Paarlshoop
    //       pan: {
    //        animate: true,
    //        duration: 3
    //       },
    //       zoom: {
    //        animate: true
    //       }
    //       });
    //
    //     }
    //     else {
    //       // $("#map").fadeTo(2000,0);
    //       // $(".video1").delay(500).fadeIn(1000);
    //       // document.getElementById('video1container').play();
    //     }
    //   },
    //   offset: twoThirds
    //   })








  // var waypoint2 = new Waypoint({
  //   element: document.getElementById('topic2'),
  //   handler: function(direction) {
  //     console.log('Basic waypoint triggered' + direction)
  //     if(direction === "down") {
  //       $(".map1").fadeOut(1000);
  //       $(".school1").delay(1100).fadeIn(1000);
  //
  //     }
  //     else {
  //       $(".school1").fadeOut(1000);
  //       $(".map1").delay(1100).fadeIn(1000);
  //     }
  //   },
  //   offset: twoThirds
  //   })
