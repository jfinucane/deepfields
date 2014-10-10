c= document.getElementById("explain_min_max")

if (c!=null)
  ctx=c.getContext("2d")
  ctx.strokeStyle ='#ffffff'
  ctx.moveTo(100,40)
  ctx.lineTo(300,40)
  ctx.stroke()
  ctx.moveTo(100,35)
  ctx.lineTo(100,45)
  ctx.stroke()
  ctx.moveTo(300,35)
  ctx.lineTo(300,45)
  ctx.stroke()
  ctx.font="12px Arial"
  ctx.fillStyle='#ffffff'
  ctx.fillText("Lowest Value",75,60)
  ctx.fillText("Highest Value",275,60)