$(function() {
  $("#small1").click(function () {
    var imgNew = $(this).css('background-image')
    var imgOld = $("#big").css('background-image')
    $("#big").css('background-image', imgNew)
    $(this).css('background-image', imgOld)
  })
})
