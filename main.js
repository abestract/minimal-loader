//Wrapper elements for our loader.
var wrapper = "<div class=\"wrapper\"></div>";
var loaderPx = "<span class=\"loader-px\"></span>";

//Append the wrapper dynamically to the body element.
$(document).ready(function () {
  $("body").on("click", function(){
    $(this).append(wrapper);
    //Get the width of the wrapper element after it's been appended
    var appendWrapperWidth = $(".wrapper").width();
    //Using this method: http://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/
    (function theLoop (i) {
      setTimeout(function () {
        $(".wrapper").append(loaderPx);
        if (--i) {          // If i > 0, keep going
          theLoop(i);       // Call the loop again, and pass it the current value of i
        }
      }, 1);
    })(appendWrapperWidth);
  });
});

