game.service('sampleDraw', ['galaxyData', function(galaxyData) {
var sample_frequencies = function() {
  var galaxies = galaxyData.galaxies_for_current_field()
  var pts = galaxies.length
  var your_sample_size = galaxyData.count_of_samples()
  var freq = Array(5)
  for(var trial=0; trial < 5; trial++){ 
    irregular = 0
    for(var i=0; i< your_sample_size; i++){
      var sample_id = Math.floor(Math.random()*pts)
      if (galaxies[sample_id][2] == 4) {irregular +=1}
      }
      freq[trial] =irregular*100.0/your_sample_size
   }
  var pixel_locations = []
  for (i=0; i<5; i++){
      pixel_locations[i] = freq[i] * 4.84 +18
   }
   pixel_locations.sort(function(a,b){return a-b})
   var middle = pixel_locations[2]
   var sum = 0
   for(i=0; i<5; i++){sum += pixel_locations[i]}
   var avg = sum/5.0
   return {frequencies: freq, median_pixel: middle, mean_pixel: avg, pixels: pixel_locations};
}
this.sample_draw= function(ctx){
  var freq = sample_frequencies()
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
  ctx.beginPath()
  ctx.strokeStyle='#000'
  ctx.moveTo(freq.pixels[0], 105)
  ctx.lineTo(freq.pixels[4], 105)
  ctx.stroke();
  ctx.moveTo(freq.pixels[0], 100)
  ctx.lineTo(freq.pixels[0], 111)
  ctx.stroke();
  ctx.moveTo(freq.pixels[4], 100)
  ctx.lineTo(freq.pixels[4], 111)
  ctx.stroke()
  return freq
}
this.red_diamond = function(ctx,x,y, size){
  ctx.beginPath()
  ctx.strokeStyle=window.DOTS['RED_BORDER'];
  ctx.fillStyle=window.DOTS['RED'];
  ctx.moveTo(x, y-size)
  ctx.lineTo(x+size, y)
  ctx.stroke()
  ctx.lineTo(x, y+size)
  ctx.stroke()
  ctx.lineTo(x-size, y)
  ctx.stroke()
  ctx.closePath();
  ctx.stroke()
  ctx.fill();
}
this.green_circle = function(ctx,x,y,r){
  ctx.beginPath()
  ctx.fillStyle=window.DOTS['GREEN'];
  ctx.arc(x,y,r,0, 2*Math.PI)
  ctx.fill()
}
}])
