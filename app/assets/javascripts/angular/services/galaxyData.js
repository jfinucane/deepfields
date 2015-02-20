function closest (x,y, galaxy_locations, galaxy_counts, galaxy_list) {
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
  if ((closest_distance < 101) && (galaxy_list.indexOf(closest_id)==-1)){
      $("#done_button").removeClass('button_outside_gray').addClass('button_outside')
      drawX(galaxy_coordinates)
      galaxy_list.push(closest_id)
      console.log('Counting', galaxy_coordinates, galaxy_counts)
      galaxy_counts[galaxy_coordinates[2]] += 1
  }
  else {console.log(['why not', closest_distance, closest_id], galaxy_list)}
}


function show_counts(counts) {
    console.log('Elliptical '+String(counts[1]))
    console.log('Spiral Early '+String(counts[2]))
    console.log('Spiral Late '+String(counts[3]))
    console.log('Irregular '+String(counts[4]))
    $('#active_counts').html(counts[1]+counts[2]+counts[3]+counts[4])
}

game.service('galaxyData', ['$http', 'fieldChoice', 
  function($http, fieldChoice){
  var galaxy_counts =[0,0,0,0,0]
  var galaxy_list = []
  var galaxies
  console.log('JUST ONE TIME GET GALAXIES TODOREMOVE')
  $http.get('/finder/hdf.json').success(function(data,status,headers){
  	console.log(data, 'SUCCESS')
  	galaxies = data
  })
  galaxy_points = function(galaxies){

  	var field = 'hdf'+fieldChoice.get_field()
  	console.log('whats the points', field, galaxies[field])
  	return (galaxies[field])
  }
  this.sample_this_galaxy = function(event){
    image_pos = $('#starfield').position()
    delta_x = ($('body').width()-$('.center_block').width())/2
    console.log(image_pos,event.clientX, event.clientY)
    var x = event.clientX - image_pos.left - delta_x - 10
    var y = event.clientY - image_pos.top - 32
    galaxy_locations = galaxy_points(galaxies)
    console.log(['trying to call closest', fieldChoice.get_field(), x,y])

  	g = closest(x,y, galaxy_locations, galaxy_counts, galaxy_list)
    
    show_counts(galaxy_counts)

  }
}])