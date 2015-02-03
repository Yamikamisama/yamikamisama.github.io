$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

  $("#bio_link").click(function(){
    $("#center_view").children().hide();
    $("#bio").fadeIn(1000);
  });

  $("#music_link").click(function(){
    $("#center_view").children().hide();
    $("#music").fadeIn(1000);
  });

  $("#video_link").click(function(){
    $("#center_view").children().hide();
    $("#video").fadeIn(1000);
  });

  $("#pictures_link").click(function(){
    $("#center_view").children().hide();
    $("#owl-demo").fadeIn(1000);
  });
});
