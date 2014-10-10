function ctx_var (){
  var c=document.getElementById("variability");
  return c.getContext("2d");
}
function direction(){
    return $('#field').text()
}
function eraser_variability(){
    $("#replace_canvas").html(
"<canvas id='variability' width='540' height='150'></canvas>")
}
function frequencies(get_count_var){
   pts = window.data_galaxies.length
   freq = Array(5)
   for(var trial=0; trial < 5; trial++){ 
      irregular = 0
      for(var i=0; i< get_count_var; i++){
        var sample_id = Math.floor(Math.random()*pts)
        if (window.data_galaxies[sample_id][2] == 4) {irregular +=1}
      }
      freq[trial] =irregular*100.0/get_count_var
   }
   for (i=0; i<5; i++){
      $('#f' + i).text(freq[i].toFixed(1) + "%")
      freq[i] = freq[i] * 4.84 +18
   }
   console.log('here')
   console.log(freq)
   return  freq.sort(function(a,b){return a-b});
}
function sample_draw(freq){
    eraser_variability()
    var c=document.getElementById("variability");
    var ctx=c.getContext("2d");
    ctx.beginPath()
    ctx.strokeStyle='#000'
  
    ctx.moveTo(freq[0], 105)
    ctx.lineTo(freq[4], 105)
    ctx.stroke();

    ctx.moveTo(freq[0], 100)
    ctx.lineTo(freq[0], 111)
    ctx.stroke();

    ctx.moveTo(freq[4], 100)
    ctx.lineTo(freq[4], 111)
    ctx.stroke()
}
function red_diamond(ctx,x,y, size){
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
function green_circle(ctx,x,y,r){
    ctx.beginPath()
    ctx.fillStyle=window.DOTS['GREEN'];
    ctx.arc(x,y,r,0, 2*Math.PI)
    ctx.fill()
}







