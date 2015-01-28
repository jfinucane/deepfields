game.service ('drawProgressDots2', function() {
 
    progress_dot = function(ctx, x,y, progress_state,is_current){
      ctx.beginPath()
      y = y + sine_roll(x)
      ctx.arc(x,y, 5, 0, 2*Math.PI, false )

      if (progress_state == true) {
        if (is_current) ctx.fillStyle= '#d54c39'
        else ctx.fillStyle = '#d4c5ab'
      }  
      else ctx.fillStyle= '#ffffff' 
      ctx.fill()
    }
    draw_spacing = 25
    sine_roll = function(pos) {
      height = 7
      dots_per_cycle = 8
      px_per_cycle = dots_per_cycle * draw_spacing
      px_to_radians =  px_per_cycle /(2 * Math.PI)
      radians = pos/ px_to_radians
      sine = Math.sin(radians + 1.75)
      return height* sine  
    }       
    canvas = document.getElementById("progress_bar")
    ctx = canvas.getContext("2d")
    boomerang_at =[2,10,13,22,29]
    boomerang_positions =[]
    first_dot_offset = 60
    draw_x = first_dot_offset
    draw_progress = function(i,progress) {
      if (boomerang_at.indexOf(i)>-1)
        boomerang_positions.push(draw_x)
      else 
        progress_dot(ctx,draw_x, 30, progress[i], progress[0]==i)

      draw_x = draw_x + draw_spacing 
      }
    this.draw_progress_trail = function(progress) {
      ctx.clearRect(0,0,canvas.width, canvas.height)
    	for (i=1; i<=32; i++) { 
    		draw_progress(i, progress)
    	}
      img = new Image();
      img.onload = function() {
        for(i=0; i< boomerang_positions.length; i++){
          pos = boomerang_positions[i]
          ctx.drawImage(img, pos+15, 155 + sine_roll(pos-7))
        }
      }  
      path=$('#boomerang_path')
      img.src = path.html()
    }  
});