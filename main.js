//Wrapper elements for our loader.
var wrapper = "<div class=\"wrapper\"></div>";
var loaderPx = "<span class=\"loader-px\"></span>";

//Append the wrapper dynamically to the body element.
$(document).ready(function () {
  $("body").on("click", function(){
    $(this).append(wrapper);
    //Get the width of the wrapper element after it's been appended
    var appendWrapperWidth = $(".wrapper").width();
    var applyLoader = function () {
      //Loop thru and apply 1px to the wrapper
      for (var i=0; i<appendWrapperWidth; i++) {
        $(".wrapper").append(loaderPx);
      }
    };
    return applyLoader();
  });
});

