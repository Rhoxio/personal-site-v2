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
  }); // Pts.namespace( window );
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