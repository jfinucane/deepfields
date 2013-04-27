// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
function sf (x,y) {
    var c=document.getElementById("StarDraw");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);
    ctx.stroke();
}
function pt (x,y) {
    var c=document.getElementById("StarDraw");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,2,0,2*Math.PI);
    ctx.stroke();
}


jQuery(document).ready(function(){
  canvas_corner = $('#starfield').position();
  xtop = canvas_corner.top
  xleft = canvas_corner.left
  $(document).mousemove(function(e){
      x = e.pageX 
      y = e.pageY
   }); 

  star_corner = $('#wrapper').position();
  console.log('star corner');
  console.log(star_corner.left);
  console.log(star_corner.top);
  console.log(canvas_corner.left);
  console.log(canvas_corner.top);
  sf(0,0)
  $('img').click(function(e){
      console.log('clicked',x,y);
      $.ajax({url: "closest.json",
              data: {'x': x ,'y': y, 'top': xtop, 'left': xleft}
      }).done(function(result){
        console.log(result['x'])
        console.log(result['y'])
        new_y = parseInt(result['y'])
        console.log(new_y)
        pt(parseInt(result['x']), new_y);
        sf(x-xtop, y-xleft)
        console.log('pointed')
      });
  });


  $('canvas').click(function(e){
    console.log(x + ', ' + y)

  })

  var data, look_up;
   
  $.ajax({
  	url: "hdfn.json"
    }).done(function(result){ 
    	data = result;
        for (var i=0;i<result.length;i++)
            {
            point = result[i]
    	      sf(point[0], point[1]) 
            }
    })

})
