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
    var magnifier_used = false
    var c=document.getElementById("floating_lines");
    var  ctx=c.getContext("2d");
    floating_lines(c, ctx, 0)
    this.drag_action = function(scope) {
    $("#magnifier_glass").draggable ({
      containment: "#magnifier_container",
      drag: function () {
        var t = $(this).position().top
        $('#min_max_graphic').css('top', (30 - 5.70*t)+'px')
        floating_lines(c, ctx, t)
        if (t > 84) {
          magnifier_used = true
          scope.$apply()
        }
      } 
    })
  }
  this.slider_down = function() {
    return(magnifier_used)
  }
})