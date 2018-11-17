$(function() {
  $("#small1").click(function () {
    var imgNew = $(this).css('background-image')
    $("#big").css('background-image', imgNew)
  })

  $("#small2").click(function () {
    var imgNew = $(this).css('background-image')
    $("#big").css('background-image', imgNew)
  })

  $("#small3").click(function () {
    var imgNew = $(this).css('background-image')
    $("#big").css('background-image', imgNew)
  })

  $("#small4").click(function () {
    var imgNew = $(this).css('background-image')
    $("#big").css('background-image', imgNew)
  })

  // Mobile
  var blockWidth = parseInt($('.imgWraper').css('width'))

  var amountOfImages = $('.gallery#mobile > *').length
  var currentImage = 1

  function checkScroll() {
    galleryScroll = parseInt($('.galleryWrapper#mobile').scrollLeft())

    if (currentImage == 1) {
      $('.chevron#left').css('opacity', 0)
      $('.chevron#right').css('opacity', 1)
    } else if (currentImage == amountOfImages) {
      $('.chevron#left').css('opacity', 1)
      $('.chevron#right').css('opacity', 0)
    } else {
      $('.chevron#left').css('opacity', 1)
      $('.chevron#right').css('opacity', 1)
    }
  }

  checkScroll()

  $('.chevron#right').click(function() {
    $('.galleryWrapper#mobile').scrollLeft(galleryScroll+blockWidth)
    currentImage += 1
    checkScroll()
    console.log(galleryScroll);
  })

  $('.chevron#left').click(function() {
    $('.galleryWrapper#mobile').scrollLeft(galleryScroll-blockWidth)
    currentImage -= 1
    checkScroll()
    console.log(galleryScroll);
  })

  // $(".gallery#mobile").swipe( {
  //  //Generic swipe handler for all directions
  //   swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
  //     var mobImgWidth = $('.mobImg').css('width').replace(/[^-\d\.]/g, '');
  //     var galleryMargin = 10
  //     var moveLeft = galleryMargin - mobImgWidth;
  //     var moveRight = galleryMargin + mobImgWidth
  //
  //     if (direction == 'left') {
  //       if (currentImage < amountOfImages) {
  //         $(this).css('margin-left', galleryMargin - mobImgWidth)
  //         currentImage += 1
  //       }
  //     }
  //
  //     if (direction == 'right') {
  //       if (currentImage > 1) {
  //         $(this).css('margin-left', '5vw')
  //         currentImage -+ 1
  //       }
  //     }
  //   },
  //   //Default is 75px, set to 0 for demo so any distance triggers swipe
  //   threshold:0
  // });
})
