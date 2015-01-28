game.service ('drawProgressDots', function() {
 
    progress_dot = function(progress_ctx, x,y, progress_state,is_current){
      progress_ctx.beginPath()
      y = y + sine_roll(x)
      progress_ctx.arc(x,y, 5, 0, 2*Math.PI, false )

      if (progress_state == true) {
        if (is_current) progress_ctx.fillStyle= '#d54c39'
        else progress_ctx.fillStyle = '#d4c5ab'
      }  
      else progress_ctx.fillStyle= '#ffffff' 
      progress_ctx.fill()
    }
    var draw_spacing = 25
    sine_roll = function(pos) {
      var height = 7
      var dots_per_cycle = 8
      var px_per_cycle = dots_per_cycle * draw_spacing
      var px_to_radians =  px_per_cycle /(2 * Math.PI)
      var radians = pos/ px_to_radians
      var sine = Math.sin(radians + 1.75)
      return height* sine  
    } 
    var boomerang_at =[2,10,13,22,29]
    var first_dot_offset = 60
    var draw_progress = function(i,progress, boomerang_positions, progress_ctx) {
      if (boomerang_at.indexOf(i)>-1)
        boomerang_positions.push(draw_x)
      else 
        progress_dot(progress_ctx,draw_x, 30, progress[i], progress[0]==i)
      draw_x += draw_spacing 
      }

    this.draw_progress_trail = function(progress) {
      var progress_canvas = document.getElementById("progress_bar")
      var progress_ctx = progress_canvas.getContext("2d")
      var boomerang_positions = []
      draw_x = first_dot_offset
      progress_ctx.clearRect(0,0,progress_canvas.width, progress_canvas.height)
    	for (i=1; i<=32; i++) { 
    		draw_progress(i, progress, boomerang_positions, progress_ctx)
    	}
      var img = new Image();
      img.onload = function() {
        for(i=0; i< boomerang_positions.length; i++){
          pos = boomerang_positions[i]
          progress_ctx.drawImage(img, pos-7, 15 + sine_roll(pos-7))
        }
      }  
      var path=$('#boomerang_path')
      img.src = path.html()
      console.log('positions', boomerang_positions)
    }  
});