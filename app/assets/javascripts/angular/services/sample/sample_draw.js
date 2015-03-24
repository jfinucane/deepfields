game.service('sampleDraw', ['galaxyData', function(galaxyData) {
var sample_frequencies = function(your_sample_size) {
  var galaxies = galaxyData.galaxies_for_current_field()
  var pts = galaxies.length
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
var reasonable_size = 0
var reasonable_freq = []
this.get_reasonable_size = function(){return reasonable_size}
this.get_reasonable_freq = function (){return reasonable_freq}
this.set_reasonable_size = function(size) {
  reasonable_size = size
  reasonable_freq = sample_frequencies(reasonable_size)
}
var five_sample_frequencies  = []
this.set_sample_frequencies = function(freq) {
  five_sample_frequencies = freq
}
this.get_sample_frequencies = function() {
   if (five_sample_frequencies.length > 0) {
      return five_sample_frequencies
   }
   five_sample_frequencies = sample_frequencies(galaxyData.count_of_samples())
   return five_sample_frequencies
   }
this.sample_draw= function(ctx){
  var freq = sample_frequencies(galaxyData.count_of_samples())
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
var heavy_bar = function(ctx,x,y){
  x = Math.floor(x);
  y = Math.floor(y);
  ctx.moveTo(x,y-9);
  ctx.lineTo(x,y+9);
  ctx.stroke()
}  
this.heavy_line = function(id, color, x1, x2, y) {
  c=document.getElementById(id)
  if (c == null) {
    console.log('heavy line NOT drawn for ', id)
    return
  }
  ctx=c.getContext("2d")
  ctx.beginPath()
  ctx.strokeStyle=color
  ctx.lineWidth=3
  ctx.moveTo(x1,y)
  ctx.lineTo(x2,y)
  ctx.stroke()
  heavy_bar(ctx,x1,y)
  heavy_bar(ctx,x2,y)
}  
}])
