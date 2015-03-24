game.service('bestSampleDraw', ['sampleDraw', 'galaxyData', function(sampleDraw, galaxyData) {
  function draw_statistics_line(ctx, freq, y, color){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.moveTo(Math.floor(freq[0]),y)
    ctx.lineTo(Math.floor(freq[4]),y)
    ctx.stroke()
    v_bar(ctx,freq[0],y)
    v_bar(ctx,freq[4],y)
  }
  function v_bar(ctx,x,y){
     x = Math.floor(x);
     y = Math.floor(y);
     ctx.moveTo(x,y-4);
     ctx.lineTo(x,y+4);
     ctx.stroke()
  }
  var legacy_samples = {
    5:  [59, 100, 80,84], 10: [59, 80, 69, 72], 15: [46, 80, 66, 67],
    20: [54, 85, 75, 73], 25: [56, 75, 67, 67], 30: [68, 83, 78, 77],
    35: [65, 72, 68, 68], 40: [57, 67, 63, 63], 45: [62, 74, 71, 66],
    50: [67, 77, 70, 70], 55: [66, 75, 68, 69], 60: [65, 70, 66, 65]
  }
  var legacy_frequencies = function(sample_size) {
    raw = legacy_samples[sample_size]
    var adjust = 5 * raw[3]  - raw[0] - raw[1] - raw[2] - raw[3]
    var freq
    if (adjust > raw[3]){freq = [raw[0], raw[2],raw[2], adjust, raw[1]]}  
    else {freq = [raw[0], adjust, raw[2],raw[2], raw[1]]}
    return freq.map(function(f) {return f*5.2 - 133 })
  }
  var old_line_x = 0;
  var old_line_y = 0;
  function connect_line(ctx,x,y){
    if (x==0 && y ==0) {
      old_line_x = 0;
      old_line_y = 0;
      return
    }
    if ( old_line_x > 0 || old_line_y > 0) {
       ctx.beginPath();
       ctx.strokeStyle ='#000000';
       ctx.moveTo(old_line_x, old_line_y);
       ctx.lineTo(x,y);
       ctx.stroke();
    }
    old_line_x = x;
    old_line_y = y;
  } 
  this.red_median =  function() {
    c=document.getElementById("live_samples");
    ctx=c.getContext("2d") 
    connect_line(ctx, 0.0)
    for(i=5; i<= 60; i+=5) {
      ctx.beginPath()
      y=y_rel(i)
      if (i == galaxyData.count_of_samples()) {freq = window.your_persistent_freq}
      else {
        freq = legacy_frequencies(i)
      }
      median = Math.floor(freq[2])
      sampleDraw.red_diamond(ctx, median, y, 5) 
      connect_line(ctx, median,y)
    }  
  }
  this.green_mean = function () {
    c=document.getElementById("live_samples");
    ctx=c.getContext("2d") 
    connect_line(ctx, 0,0)
    for (i =5; i<= 60; i+=5) {
       ctx.beginPath()
       y=y_rel(i)
       if (i == galaxyData.count_of_samples()){freq = window.your_persistent_freq}
       else {
         freq = legacy_frequencies(i)
       }
       mean = Math.floor((freq[0]+freq[1]+freq[2]+freq[3]+freq[4])/5)
       sampleDraw.green_circle(ctx, mean, y, 5)
       connect_line(ctx, mean ,y) 
    }   
  }
  var y_rel = function (sample_size) { return (sample_size*21)/5+34 }
  var freq_to_pixels = function(freq) {
    var freq= freq.frequencies
    var sorted = freq.sort()
    return sorted.map(function(f){  if(f<40){f=40};  return (73+5.09*(f-40))})
  }
  this.dummy_draw = function () {
    var reasonable = sampleDraw.get_reasonable_size()
    sampleDraw.heavy_line('green_sample', '#0f0',2,97, 9)
    sampleDraw.heavy_line('purple_sample', '#f0f',2,97, 9)
    c=document.getElementById("live_samples")
    c.width = c.width //TODO Standardize redraw
    ctx=c.getContext("2d");
    var sample_count = galaxyData.count_of_samples()
    var sample_freq = sampleDraw.get_sample_frequencies()
    draw_statistics_line(ctx, freq_to_pixels(sample_freq), y_rel(sample_count), '#f0f')
    if (reasonable>0) {
      draw_statistics_line(ctx, freq_to_pixels(sampleDraw.get_reasonable_freq()), y_rel(reasonable), '#0f0')
    }
    for (sample=5; sample<65; sample+=5) {
      if (sample != reasonable && sample != sample_count) {
        draw_statistics_line(ctx, legacy_frequencies(sample), y_rel(sample), '#000')
      }
    }
  }
}])