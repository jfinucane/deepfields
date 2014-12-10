

window.mouseEnter = ()->      
    vertex = [[-4,88],[134,-6],[225,134],[87,229]]
    pairs_of_vertices = [[0,1], [1,2], [2,3],[3,0]]
    border_lines = []
    compute_line = (pair) ->
      pt1 = vertex[pair[0]]
      pt2 = vertex[pair[1]]
      x1 = pt1[0]
      y1 = pt1[1]
      x2 = pt2[0]
      y2 = pt2[1]
      b = (x2*y1- y2*x1)/(x2-x1)
      a = (y1-y2)/(x1-x2)
      border_lines.push([a,b])
    compute_line pair for pair in pairs_of_vertices
    point_above_line = (x,y, line) ->
      a = line[0]
      b = line[1]
      (a*x + b - y) < 0
    middle = $('body').width()/2
    if middle < 470
      middle = 470
    $(document).mousemove (e) ->
       #do you know where your documentElem is?
       x = e.pageX - middle + 151
       y = e.pageY - 214
       above0 = point_above_line(x, y, border_lines[0])
       above1 = point_above_line(x, y, border_lines[1])
       above2 = point_above_line(x, y, border_lines[2])
       above3 = point_above_line(x, y, border_lines[3])
       window.inside = above0 && above1 && !above2 && !above3
       if window.inside
         $('.btn_enter').addClass('btn_enter_hover')
       else
         $('.btn_enter').removeClass('btn_enter_hover')
    $('.btn_enter').click () ->
     path = $('#lesson_index_path').html().trim()
     if window.inside
       window.location = path