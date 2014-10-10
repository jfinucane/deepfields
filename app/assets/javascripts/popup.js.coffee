jQuery(document).ready () ->
  return
  $('.explain1').on 'click', (e) ->
     word = this.id
     explain1(word)

  $('.explain').on 'click', (e) ->
     word = this.id
     explain(word)
     
  $('.close').on 'click', (e) ->
     window.close() 

   