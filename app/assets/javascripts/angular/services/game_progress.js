gameControllers.factory('gameProgress',function(){
  boomerang_at =[2,10,13,22,29]	
  progress_array = Array()

  a = new function() {
    this.boomerang_at = boomerang_at
    signpost_stage = ['Start']


    this.background_color = 'intro' + '_color'
    this.show_signpost = function(signpost_name){
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
 
      if (undone < boomerang_at[1]) {signpost_stage[0]='Start'}  
      else if(undone < boomerang_at[2]) {signpost_stage[0]='Bias'}
      else if(undone < boomerang_at[3]) {signpost_stage[0]='Sample'}  
      else if(undone < boomerang_at[4]) {signpost_stage[0]='HDFN'}  
      else {signpost_stage[0]='Last'}  
  
    }
  }
  return a;
});

console.log('hi yo')