#The ENTER sign on the home page is a diamond and has a non rectangular click area.

compute_line = (pair, vertex, border_lines) ->
  pt1 = vertex[pair[0]]
  pt2 = vertex[pair[1]]
  x1 = pt1[0]
  y1 = pt1[1]
  x2 = pt2[0]
  y2 = pt2[1]
  b = (x2*y1- y2*x1)/(x2-x1)
  a = (y1-y2)/(x1-x2)
  border_lines.push([a,b])

initialize_hover_area = ()-> 
  console.log 'initialize'
  vertex = [[-4,88],[134,-6],[225,134],[87,229]]
  pairs_of_vertices = [[0,1], [1,2], [2,3],[3,0]]
  border_lines = []
  compute_line pair, vertex, border_lines for pair in pairs_of_vertices
  border_lines
border_lines = initialize_hover_area()

point_above_line = (x,y, line) ->
  a = line[0]
  b = line[1]
  (a*x + b - y) < 0

middle_of_page = () ->
  middle = angular.element('body').width()/2
  middle = 470 if middle < 470
  middle
middle = middle_of_page()

window.home_inside = (e) ->
  x = e.pageX - middle + 151
  y = e.pageY - 214
  above0 = point_above_line(x, y, border_lines[0])
  above1 = point_above_line(x, y, border_lines[1])
  above2 = point_above_line(x, y, border_lines[2])
  above3 = point_above_line(x, y, border_lines[3])
  above0 && above1 && !above2 && !above3 

game.controller \
  'homeCtrl',
  ($scope, $location) -> 
    $scope.enter = () ->
      $scope.home_inside = window.home_inside(event)
    $scope.home_class = () ->
      'btn_enter_hover' if $scope.home_inside 
    $scope.home_click = () -> 
      $location.path('/itinerary') if $scope.home_inside

 