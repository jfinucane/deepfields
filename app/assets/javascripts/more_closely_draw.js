function top_tick(ctx,x){
    ctx.beginPath()
    ctx.strokeStyle="#000";
    ctx.moveTo(x, 26)
    ctx.lineTo(x, 34)
    ctx.stroke()
}
function top_stack(ctx, x, text){
    ctx.font='10px open_sansbold'
    ctx.fillStyle='#000'
    ctx.fillText(text[0], x, 11)
    ctx.fillText(text[1], x, 23)
}
function funnel_draw_headers(){
    var c=document.getElementById("live_samples");
    funnel_ctx=c.getContext("2d");
    top_stack(funnel_ctx, 10, ['Sample', '  size'])
    top_stack(funnel_ctx, 65, [' ' ,'40%'])
    top_stack(funnel_ctx, 200, ['Variability ', '     70%'])
    top_stack(funnel_ctx, 370, [' ','100%'])
    var pts = [74, 127, 180, 223, 276, 329, 384]
    for (var tick in pts){
        top_tick(funnel_ctx, pts[tick])
    }
    funnel_ctx.beginPath()
    funnel_ctx.strokeStyle="#644c3f";
    funnel_ctx.lineWidth =3;
    funnel_ctx.moveTo(10, 30)
    funnel_ctx.lineTo(390,30)
    funnel_ctx.stroke()
}
function init_graph_legend(){
    funnel_draw_headers();
    draw_right_numbers()
    c=document.getElementById("live_samples");
    ctx=c.getContext("2d");
    ctx.beginPath()
    ctx.strokeStyle="#644c3f";
    ctx.lineWidth =3;
    ctx.moveTo(50,0)
    ctx.lineTo(50,300)
    ctx.stroke()
}
function draw_right_numbers(){
    if (!window.page('Best Region') && !window.page('You Got It')) 
      return
    var c=document.getElementById("live_samples");
    ctx=c.getContext("2d");
    for (var y= 51; y< 300; y+=42){
      ctx.fillStyle = "#d4c4a4";
      ctx.fillRect(0,y,396,21);
    } 
    for (var y= 51; y< 300; y+=21){
        ctx.font='13px open_sansbold'
        ctx.fillStyle='#000'
        ctx.fillText(5+ 5*(y-51)/21,15,y+4)
        ctx.beginPath()
        ctx.moveTo(44, y)
        ctx.lineTo(56,y)
        ctx.lineWidth=2
        ctx.strokeStyle='#644c3f'
        ctx.stroke()
    }   
}
//DUPLICATE TODOJF
function v_bar(ctx,x,y){
   x = Math.floor(x);
   y = Math.floor(y);
   ctx.moveTo(x,y-4);
   ctx.lineTo(x,y+4);
   ctx.stroke()
}


     
