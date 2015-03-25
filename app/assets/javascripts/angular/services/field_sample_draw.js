game.service('fieldSampleDraw', ['galaxyData', 'fieldChoice', function (galaxyData, fieldChoice) {
  var diamond = function(ctx, x,y, field) {
    ctx.beginPath()
    ctx.moveTo(x, y-7)
    ctx.lineTo(x-7, y)
    ctx.lineTo(x,y+7)
    ctx.lineTo(x+7, y)
    ctx.lineTo(x,y-7)
    ctx.strokeStyle= '#ff0000'
    ctx.stroke()
  }
  this.other_field_draw = function (reasonable) {
  	var points = galaxyData.galaxies_for_current_field()
    var galaxy_count = points.length
    var galaxy_list = []
    var field = fieldChoice.get_field()
    var c=document.getElementById(field+"StarDraw");
    c.width = c.width
    var  ctx=c.getContext("2d");
    while (galaxy_list.length < reasonable)  {
       var point_id = Math.floor(Math.random()*galaxy_count)
       if (galaxy_list.indexOf(point_id)== -1) {
         galaxy_list.push(point_id)
         point = points[point_id]
         diamond(ctx, point[0], point[1], field)
       }
     }  
  }
  var reasonable_size = 0
  this.set_reasonable_size = function(size) {reasonable_size = size}
  this.get_reasonable_size = function() {return reasonable_size}
}])