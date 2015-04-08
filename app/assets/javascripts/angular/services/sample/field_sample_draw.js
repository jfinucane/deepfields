game.service('fieldSampleDraw', ['galaxyData', 'fieldChoice', 'sampleTypeFrequency',
  function (galaxyData, fieldChoice, sampleTypeFrequency) {
  var freq = {}
  var type_map = sampleTypeFrequency.type_map
  var type_names = sampleTypeFrequency.type_names
  var galaxy_counts=[0,0,0]
  var points
  var galaxy_list = []
  var field
  var diamond = function(ctx, x, y) {
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
    var c=document.getElementById(field+"StarDraw");
    c.width = c.width //IDIOM  FOR REDRAW
    var  ctx=c.getContext("2d");
    galaxy_list.map(function(point_id){
      galaxy= points[point_id] 
      diamond(ctx, galaxy[0], galaxy[1])
    })
  }
  var reasonable_size = 0
  this.set_reasonable_size = function(size) {
    reasonable_size = size
    galaxy_counts = [0,0,0]
    galaxy_list = []
    points = galaxyData.galaxies_for_current_field()
    var galaxy_count = points.length
    field = fieldChoice.get_field()
    while (galaxy_list.length < reasonable_size)  {
       var point_id = Math.floor(Math.random()*galaxy_count)
       if (galaxy_list.indexOf(point_id)== -1) {
         galaxy_list.push(point_id)
         galaxy = points[point_id]
         var galaxy_type = type_map[galaxy[2]]
         galaxy_counts[galaxy_type] += 1
       }
    }
    frequency_list =[]
    for (i in [0,1,2]) {
      count= galaxy_counts[i]
      freq = Math.round(count*1000/galaxy_list.length)/10.
      frequency_list.push({freq: freq, count: count, name: type_names[i]})
    }
  }
  this.get_reasonable_size = function() {
    return reasonable_size
  }
  this.get_type_frequencies = function () {
    return frequency_list
  }
}])