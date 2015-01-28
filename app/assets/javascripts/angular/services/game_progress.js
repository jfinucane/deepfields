game.service('gameProgress',function(){
    var compute_background_color = function(step_number, boomerang_at) {
        if      (step_number == 1)               {color = 'Intro' }
        else if (step_number == 2)               {color = 'Default'}
        else if (step_number < boomerang_at[1]) {color= 'Start'}
        else if (step_number < boomerang_at[2]) {color= 'Sias'}
        else if (step_number < boomerang_at[3]) {color= 'Sample'}
        else if (step_number < boomerang_at[4]) {color= 'HDFN'}
        else                                    {color= 'Last'}
        return color;
    }
    var boomerang_at =[2,10,13,22,29]
    var progress_array = Array()
    var  signpost_stage = ['Start']
    var background_color = ''
    pullup_visible = false
    this.show_signpost = function(signpost_name){
        console.log('check for alligator')
    	return (signpost_stage[0] == signpost_name)
    }
    this.set_step = function(step_number){   
      progress_array[0] = step_number;
      progress_array[step_number] = true;
      undone = progress_array.length
      for (var i=2; i < progress_array.length; i++) 	{
        continue_to_look =  (progress_array[i] != null) || (boomerang_at.indexOf(i)>-1)
        if ( !continue_to_look) {
          undone = i
          break
        }
      }
      if (undone <= boomerang_at[1]) {signpost_stage[0]='Start'}  
      else if(undone <= boomerang_at[2]) {signpost_stage[0]='Bias'}
      else if(undone <= boomerang_at[3]) {signpost_stage[0]='Sample'}  
      else if(undone <= boomerang_at[4]) {signpost_stage[0]='HDFN'}  
      else {signpost_stage[0]='Last'}

      background_color = compute_background_color(step_number, boomerang_at)
      pullup_visible = step_number > 2;
    }
    this.signpost_visited = function(section) {
        visited = false
        if (section==5 && progress_array[32]) {
            visited=true;
        }
        else {
          before_boomerang = boomerang_at[section]-1
          visited = progress_array[before_boomerang]
        }
        return visited 
    }
    this.set_background_color = function() {
        $('.game').removeClass('intro_color default_color start_color bias_color').
        removeClass('sample_color hdfn_color last_color ')
        $('.game').addClass(background_color.toLowerCase() + '_color');
        console.log('set background', background_color)
    }
    this.pullup = function () {return pullup_visible}  
    this.progress = function() {return progress_array}    
});
