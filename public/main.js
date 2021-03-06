"use strict";

$(function () {
  // Leader button events...
  $(".leader").hover(function (e) {
    $(".arrow-pivot").css("transform", "rotate(90deg)");
  }, function () {
    $(".arrow-pivot").css("transform", "rotate(0deg)");
  }); // Quick-jump bindings

  $(".about-jump").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
    }, 500);
  });
  $(".projects-jump").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#projects").offset().top
    }, 500);
  });
  $('.icon').hover(function () {
    $(this).animate({
      'bottom': '10px'
    }, 150);
  });
  $('.icon').mouseout(function () {
    $(this).animate({
      'bottom': '0px'
    }, 150);
  });
  $(".tab span").click(function (e) {
    e.preventDefault();
    var tabs = $(".section-tabs").children();
    var id = $(this).parent().attr("id");
    $.each(tabs, function (i, tab) {
      $(tab).removeClass('active');
    });
    $(this).parent().addClass('active');
    cyclePhotos(id); // Toggle specific tab based on of attr on element
  });

  function cyclePhotos(id) {
    var elements = $(".projects-container").children(); // var exception = type+"-chip"

    var exception = undefined;

    if (id === "ruby-tab") {
      exception = "ruby-chip";
    } else if (id === "js-tab") {
      exception = "js-chip";
    } else if (id == "other-tab") {
      exception = "other-chip";
    }

    if (exception) {
      $.each(elements, function (i, element) {
        var current = $(element);

        if (!current.hasClass(exception)) {
          current.hide();
        } else {
          current.css("margin-left", "12.5%");
          current.show();
        }
      });
    } else {
      $.each(elements, function (i, element) {
        var current = $(element);
        current.css("margin-left", "0");
        current.show();
      });
    }
  } // if($("#moire-canvas").length){
  //   // For generation
  //   var rotation = 0;
  //   var num = 8000;
  //   var radius = 1;
  //   var max = 1000;
  //   var canvases = [ 
  //     document.getElementById("moire-canvas"), 
  //     document.getElementById("moire-canvas-overlay")
  //   ];
  //   // For rotation bindings...
  //   var init, rotate, start, stop,
  //     active = false,
  //     angle = 0,
  //     startAngle = 0,
  //     center = {
  //       x: 0,
  //       y: 0
  //     },
  //   R2D = 180 / Math.PI,
  //   rot = document.getElementById('moire-canvas-overlay');
  //   // Generate random coordinates
  //   var randomSeeds = []
  //   for (var i = 0; i<= num; i++){
  //     randomSeeds.push([Math.random(i) * max, Math.random(i) * max])
  //   }
  //   var trianglePositions = []
  //   // Draw the two canvases
  //   for(var i = 0; i <= canvases.length - 1; i++){
  //     createRandomNodes(num, radius, max, randomSeeds, canvases[i]);  
  //   }
  //   // Bind reset button
  //   var btnReset = document.getElementById("btnReset");
  //   btnReset.addEventListener("click", function() {
  //     rotation = 0
  //     angle = 0
  //     startAngle = 0
  //     rotateCanvas(rotation)
  //     for(var i = 0; i <= canvases.length - 1; i++){
  //       var canvas = canvases[i]
  //       createRandomNodes(num, radius, max, randomSeeds, canvas);  
  //     }
  //   });
  //   // Bind right rotation
  //   $("#rotate-right").on("click", function(e){
  //     e.preventDefault()
  //     // rotateCanvas(rotation++)
  //     createTriangleLattice(max, document.getElementById('moire-canvas'), 10)
  //     createTriangleLattice(max, document.getElementById('moire-canvas-overlay'), 10)
  //   })
  //   function createRandomNodes(num, radius, max, seeds, canvas) {
  //     var context = canvas.getContext("2d");
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     for (var i = 0; i <= num; i++) {
  //         context.beginPath();
  //         var x = seeds[i][0]
  //         var y = seeds[i][1]
  //         context.arc(x, y, radius, 0, 2*Math.PI);
  //         context.fillStyle = "#f6f6dc";
  //         context.fill();
  //         context.closePath();
  //     }
  //     return true
  //   }
  //   function createTriangleLattice(max, canvas, hypotenuse){
  //     var perRow = canvas.width / hypotenuse
  //     var totalRows = canvas.height / (hypotenuse / 2)
  //     var context = canvas.getContext("2d");
  //     var yOffset = hypotenuse / 2
  //     var xOffset = hypotenuse
  //     var firstPoint = 5
  //     var secondPoint = hypotenuse / 2
  //     var thirdPoint = hypotenuse
  //     var forthPoint = 0
  //     var currentRow = 0
  //     var height = Math.sqrt((Math.pow(hypotenuse/2, 2) + Math.pow(hypotenuse/2, 2)))
  //     context.beginPath();
  //     context.moveTo(0, 0);
  //     var i, j
  //     for(i=0; i<totalRows;i++){
  //       // Drawing in an 'L' shape.
  //       for (j = 0; j < perRow; j++){
  //         // (5, 5)
  //         // (10, 0)
  //         context.lineTo(firstPoint, secondPoint);
  //         context.lineTo(thirdPoint, forthPoint);
  //         firstPoint = firstPoint + hypotenuse
  //         thirdPoint = thirdPoint + hypotenuse
  //       } 
  //       // var yOffset = (height * (i))
  //       // console.log(yOffset)
  //       // context.moveTo(0, yOffset);
  //       // firstPoint = yOffset
  //       // secondPoint = secondPoint + height
  //       // thirdPoint = thirdPoint + height
  //       // forthPoint = yOffset + hypotenuse
  //     //   yOffset = 0
  //     //   xOffset = 0
  //     //   currentRow = currentRow + (hypotenuse / 2)
  //     }
  //     context.closePath();
  //     context.fillStyle = "#FFCC00";
  //     context.fill();     
  //   }
  //   function rotateCanvas(rotation){
  //     var canvas = $("#moire-canvas-overlay");
  //     canvas.css("transform", "rotate("+rotation+"deg)")
  //   }
  //   // Rotation Binding Script
  //   // Shamelessly based upon: https://codepen.io/graphilla/pen/MybMxP
  //   (function() {
  //     init = function() {
  //       rot.addEventListener("mousedown", start, false);
  //       $(document).bind('mousemove', function(event) {
  //         if (active === true) {
  //           event.preventDefault();
  //           rotate(event);
  //         }
  //       });
  //       $(document).bind('mouseup', function(event) {
  //         event.preventDefault();
  //         stop(event);
  //       });
  //     };
  //     start = function(e) {
  //       e.preventDefault();
  //       var bb = this.getBoundingClientRect(),
  //         t = bb.top,
  //         l = bb.left,
  //         h = bb.height,
  //         w = bb.width,
  //         x, y;
  //       center = {
  //         x: l + (w / 2),
  //         y: t + (h / 2)
  //       };
  //       x = e.clientX - center.x;
  //       y = e.clientY - center.y;
  //       startAngle = R2D * Math.atan2(y, x);
  //       return active = true;
  //     };
  //     rotate = function(e) {
  //       e.preventDefault();
  //       var x = e.clientX - center.x,
  //         y = e.clientY - center.y,
  //         d = R2D * Math.atan2(y, x);
  //       rotation = d - startAngle;
  //       return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  //     };
  //     stop = function() {
  //       angle += rotation;
  //       return active = false;
  //     };
  //     init();
  //   }).call(this);
  // }
  // Pts.namespace( window );
  // var space = new CanvasSpace("#hello").setup({ bgcolor: "#fff" });
  // var form = space.getForm();
  // // animation
  // space.add( (time, ftime) => {
  //   // rectangle
  //   var rect = Rectangle.fromCenter( space.center, space.size.$divide(2) );
  //   var poly = Rectangle.corners( rect );
  //   poly.shear2D( Num.cycle( time%5000/5000 ) - 0.5, space.center );
  //   // triangle
  //   var tris = poly.segments( 2, 1, true );
  //   tris.map( (t) => t.push( space.pointer ) );
  //   // circle
  //   var circles = tris.map( (t) => Triangle.incircle( t ) );
  //   // drawing
  //   form.fillOnly("#123").polygon( poly );
  //   form.fill("#f03").circles( circles );
  //   form.strokeOnly("#fff ", 3 ).polygons( tris );
  //   form.fill("#123").point( space.pointer, 5 );
  // });
  // space.play().bindMouse();
  // var space = new CanvasSpace("#pt");
  // space.setup({ bgcolor: "#fff" });
  // var form = space.getForm();
  // var run = Pts.quickStart( "#pt", "#fff" );
  // space.add( () => form.point( space.pointer, 10 ) );
  // run( function(time, ftime) { 
  // } );

});