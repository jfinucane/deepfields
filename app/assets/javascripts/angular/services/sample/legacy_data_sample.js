game.service('legacyDataSample', function(){
  var legacy_samples = {
    5:  [59, 100, 80,84], 10: [59, 80, 69, 72], 15: [46, 80, 66, 67],
    20: [54, 85, 75, 73], 25: [56, 75, 67, 67], 30: [68, 83, 78, 77],
    35: [65, 72, 68, 68], 40: [57, 67, 63, 63], 45: [62, 74, 71, 66],
    50: [67, 77, 70, 70], 55: [66, 75, 68, 69], 60: [65, 70, 66, 65]
  }
  var legacy_frequencies = function(sample_size) {
    raw = legacy_samples[sample_size]
    //reverse engineer to get the mean to look like legacy, just a GUI tweak
    var adjust = 5 * raw[3]  - raw[0] - raw[1] - raw[2] - raw[3]
    var freq
    if (adjust > raw[3]){
       freq = [raw[0], raw[2],raw[2], adjust, raw[1]]
    }  
    else {
       freq = [raw[0], adjust, raw[2],raw[2], raw[1]]
    }
    return freq.map(function(f) {return f*5.2 - 133 })
  }
  




})
