
window.diamond = (x,y) ->
    c=document.getElementById("StarDraw");
    ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y-7)
    ctx.lineTo(x-7, y)
    ctx.lineTo(x,y+7)
    ctx.lineTo(x+7, y)
    ctx.lineTo(x,y-7)
    ctx.strokeStyle= '#ff0000'
    ctx.stroke();

