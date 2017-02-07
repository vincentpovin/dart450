

var speechReady = false;

var voice = 'French Female';

var voiceParameters = {
  pitch: 0.1,
  rate: 0.7,
  volume: 1
}

$(document).ready(function() {
  responsiveVoice.OnVoiceReady = speechIsReady;

  $("#debut").click(function () {
    say("Jamais.");
  });
    
});


function speechIsReady () {
  speechReady = true;
}


function say (text) {
  if (speechReady) {
    responsiveVoice.speak(text,voice,voiceParameters);
  }
}

