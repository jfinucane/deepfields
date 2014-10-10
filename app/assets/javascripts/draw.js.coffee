window.drawX = (position) ->
    x=position[0]
    y=position[1]
    c=document.getElementById("StarDraw");
    ctx=c.getContext("2d")
    ctx.strokeStyle = '#ff0000'
    ctx.lineWidth = 2
    size = 6;
    ctx.moveTo(x - size, y - size);
    ctx.lineTo(x + size, y + size);
    ctx.stroke();
    ctx.moveTo(x + size, y - size);
    ctx.lineTo(x - size, y + size);
    ctx.stroke();
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

