game.service('sampleTypeFrequency', ['galaxyData', 'sampleDraw', 'fieldChoice', 
  function(galaxyData, sampleDraw, fieldChoice){
  var type_map = [0,0,1,1,2]
  var galaxy_counts = [0,0,0]
  var galaxy_list
  this.create_type_frequency = function() {
    var points = galaxyData.galaxies_for_current_field()
    var sample_count = points.length
    galaxy_counts = [0,0,0]
    galaxy_list = []
	  while(galaxy_list.length < sampleDraw.get_reasonable_size()) {
      sample_index = Math.floor(Math.random()*sample_count)
      if (galaxy_list.indexOf(sample_index)== -1) {
        point= points[sample_index]
        galaxy_list.push(sample_index)
        console.log('galaxy stats', galaxy_counts, point[2], type_map[point[2]])
        galaxy_counts[type_map[point[2]]] += 1
      }
    }
  }
  this.type_frequency = function(galaxy_type) {
    console.log(galaxy_counts, galaxy_type)
    window.galaxy_type = galaxy_type 
    return (Math.floor(galaxy_counts[galaxy_type]*1000/(sampleDraw.get_reasonable_size()))/10.0)
  }
  var astronomers_frequencies =  { 'n': [4.6, 24.7, 70.7], 's': [5.1, 27.2, 67.2]}
  this.ASTRONOMER = function (galaxy_type_number) {
     var field = fieldChoice.get_field()
     return astronomers_frequencies[field][galaxy_type_number]
  }
  this.type_map = [0,0,1,1,2]  
  this.type_names = ['Elliptical', 'Spiral', 'Irregular']
  this.astronomers_frequencies = astronomers_frequencies
}])
