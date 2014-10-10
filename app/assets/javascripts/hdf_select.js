function closest (x,y) {
  var dist =[]
  for(var i=0; i < window.data_galaxies.length; i++){
     g = window.data_galaxies[i]
     distance = Math.pow((x-g[0]),2) + Math.pow((y-g[1]),2);
     dist[i]= [parseInt(distance),i] 
  }
  d= dist.sort(function(a,b){return a[0]-b[0]})
  return  d
}
function plotg(galaxy){
  local = window.data_galaxies[galaxy[1]]
  if (galaxy[0] < 101){
    if (galaxies_counted.indexOf(galaxy[1]) > -1){
    }
    else {
      $("#done_button").removeClass('button_outside_gray').addClass('button_outside')
      drawX(local)
      galaxies_counted[galaxies_counted.length] = galaxy[1]
      galaxy_counts[local[2]] += 1
    }
  }
}
function load_field(){
  $.ajax({
    url: json_data()
    }).done(function(result){ 
         window.data_galaxies = result;
         })
}
function show_counts(counts) {
    console.log('Elliptical '+String(counts[1]))
    console.log('Spiral Early '+String(counts[2]))
    console.log('Spiral Late '+String(counts[3]))
    console.log('Irregular '+String(counts[4]))
    $('#active_counts').html(counts[1]+counts[2]+counts[3]+counts[4])
}