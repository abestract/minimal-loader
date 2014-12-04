//Wrapper element for our loader.
var wrapper = "<div class=\"wrapper\"></div>";


//Append the wrapper dynamically to the body element.
$(document).ready(function () {
  $("body").on("click", function(){
    $(this).append(wrapper);
      //Get the width of the wrapper element after it's been appended
      var appendWrapperWidth = $(".wrapper").width();
  });
});

