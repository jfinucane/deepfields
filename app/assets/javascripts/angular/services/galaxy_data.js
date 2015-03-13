function drawX  (position) {
    x=position[0]
    y=position[1]
    c=document.getElementById("StarDraw");
    ctx=c.getContext("2d")
    ctx.strokeStyle = '#ff0000'
    ctx.lineWidth = 2
    size = 6;
    ctx.moveTo(x - size, y - size);
    ctx.lineTo(x + size, y + size);
    ctx.stroke();
    ctx.moveTo(x + size, y - size);
    ctx.lineTo(x - size, y + size);
    ctx.stroke();
}
function closest (x,y, galaxy_locations, galaxy_counts, galaxy_list) {
  var type_map = [0,0,1,1,2] //these types summarize the four categories in YAML
  var dist =[]
  for(var i=0; i < galaxy_locations.length; i++){
     g = galaxy_locations[i]
     distance = Math.pow((x-g[0]),2) + Math.pow((y-g[1]),2);
     dist[i]= [parseInt(distance),i] 
  }
  d= dist.sort(function(a,b){return a[0]-b[0]})
  console.log('aha d[0] contains', d[0])
  closest_galaxy = d[0]
  closest_id = closest_galaxy[1]
  closest_distance = closest_galaxy[0]
  galaxy_coordinates = galaxy_locations[closest_id]
  // must click within 10px and must be unique new sample 
  if ((closest_distance < 101) && (galaxy_list.indexOf(closest_id)==-1)){
      drawX(galaxy_coordinates)
      galaxy_list.push(closest_id)
      //mapping the galaxy data into fewer types
      galaxy_counts[type_map[galaxy_coordinates[2]]] += 1
  }
}
game.service('galaxyData', ['$http', 'fieldChoice', function($http, fieldChoice){
  var galaxy_counts =[0,0,0]
  var galaxy_list = []
  var galaxies,frequency_list
  var type_names = ['Elliptical', 'Spiral', 'Irregular']
  $http.get('/finder/hdf.json').success(function(data,status,headers){
  	console.log(data, 'SUCCESS')
  	galaxies = data
  })
  galaxy_points = function(galaxies){
  	var field = 'hdf'+fieldChoice.get_field()
  	return (galaxies[field])
  }
  this.galaxies_for_current_field = function() {
    return galaxy_points(galaxies)
  }
  this.sample_this_galaxy = function(event){
    image_pos = $('#starfield').position()
    delta_x = ($('body').width()-$('.center_block').width())/2
    var x = event.clientX - image_pos.left - delta_x - 10
    var y = event.clientY - image_pos.top - 32
    galaxy_locations = galaxy_points(galaxies)
  	g = closest(x,y, galaxy_locations, galaxy_counts, galaxy_list)  
  }
  this.reset_the_counts = function () {
  	galaxy_counts = [0,0,0,0,0]
  	galaxy_list = []
  }
  this.count_of_samples = function() {
  	return (galaxy_list.length)
  }
  this.compute_frequencies = function () {
  	frequency_list =[]
  	for (i in [0,1,2]) {
  		count= galaxy_counts[i]
  		freq = Math.round(count*1000/galaxy_list.length)/10.
  		frequency_list.push({freq: freq, count: count, name: type_names[i]})
  	}
  	console.log("FREQ", frequency_list)
  }
  this.frequencies = function () {
  	return (frequency_list)
  }
  this.count_by_type = function () {
  	console.log(galaxy_counts, 'COUNT BY TYPE')
  	return (galaxy_counts)
  }
  this.redraw_galaxies = function() {
  	console.log('LIST', galaxy_list)
  	for (i in galaxy_list) {
  		var galaxy_id = galaxy_list[i]
   		console.log(galaxy_id)
  		drawX(galaxy_locations[galaxy_id])
  	}
  }
  this.create_default_data =function() {
    galaxy_counts=[2,6,1]
    frequency_list=[{freq: 22.2, count: 2, name: type_names[0]},
                    {freq: 66.7, count: 6, name: type_names[1]},
                    {freq: 11.1, count: 1, name: type_names[2]}]
    galaxy_list=[11,22,33,44,55,66,77,88,99]
    console.log(frequency_list[2], 'DEFAULT')
  }
}])