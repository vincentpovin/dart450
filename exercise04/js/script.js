

// How long to wait between showing new lines
const LINE_DELAY = 1500;

// An index into the array of dialog, pointing to the current line
// to put on the screen. Starts at 0, the first line!
var currentLine = 0;

$(document).ready(function() {

    setTimeout(function() {
        $("#debut").hide();
    }, LINE_DELAY);

    
    setTimeout(function() {
        $("#debutoui").show();
    }, LINE_DELAY);
    
    setTimeout(function() {
        $("#debutnon").show();
    }, LINE_DELAY);
    
    $('#debutoui').click(function(){
        $(this).hide();
        $("#debutnon").hide();
    });
    
    $('#debutnon').click(function(){
        $(this).hide();
    });
    
});

function showLine () {

  // Set both divs to be blank
  $('#romeo,#juliet').text('');

  // Get the name of the current speaker, which is the same
  // as the CSS id for the div to put their text in
  var speaker = dialog[currentLine].name

  // Get the line they should speak
  var line = dialog[currentLine].line

  // Set the appropriate div to have the line in it
  $('#' + speaker).text(line);

  // Increase our index into the array by one to advance the dialog
  currentLine++;

  // Check if there are still lines remaining in the array of dialog
  if (currentLine < dialog.length) {
    // If so, set another timeout to say the next line
    setTimeout(showLine,LINE_DELAY);
  }
    
  // If the conditional was false, the page will stop setting timeouts
  // and will do nothing, leaving the final line on the screen.

}
