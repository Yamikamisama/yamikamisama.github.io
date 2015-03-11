$(document).ready(function() {

	//Variables that will be used to load a random image
  var randNum = Math.floor(Math.random() * 3) + 1,
      randSrc = 'images/poster_' + randNum + '.png'

  //Function to load a random image
  function randImgLoader() {
      $('#show-image').css('background-image', 'url(' + randSrc + ')')
  }

  //Event handler for when the thumbnails () are clicked
  $('li').on('click', function() {
      var poster = this,
          $imgSrc = $(this).children('img').attr('src')

      $('#show-image').css('background-image', 'url(' + $imgSrc + ')')
      $('ul').append(poster)
  })

  //Invoke Random Image Function
  randImgLoader();
});