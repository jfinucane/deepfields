game.service('magnifierDrag', function() {
  var floating_lines = function(c, ctx, t) { 
    c.width = c.width
    ctx.beginPath()
    ctx.strokeStyle = '#008ec7'
    ctx.lineWidth=4
    ctx.moveTo(0,20 + t )
    ctx.lineTo(50,20)
    ctx.stroke()
    ctx.moveTo(0,87 + t)
    ctx.lineTo(50,379)
    ctx.stroke()
}
 var c=document.getElementById("floating_lines");
 var  ctx=c.getContext("2d");
  floating_lines(c, ctx, 0)
  $("#magnifier_glass").draggable ({
    containment: "#magnifier_container",
    drag: function () { 
      var t = $(this).position().top
      $('#min_max_graphic').css('top', (30 - 5.70*t)+'px')
      floating_lines(c, ctx, t)
      if (t > 84) {
        $('.next_disable_signpost').addClass('hide')
        $('.next_signpost').removeClass('hide')
    }
    } 
    })   
})