$(function () {
  // $(".toggle>ul>li").mouseover(function () {
  //   $(this).children("ul").show()
  // })
  // $(".toggle>ul>li").mouseout(function () {
  //   $(this).children("ul").hide()
  // })

  $(".burger").click(function () {
    $(".nav-menu").toggleClass("open")
    if ($(".burger>i").prop("class") == "fa fa-bars") {
      $(".burger>i").attr("class", "fa fa-close")
    } else {
      $(".burger>i").attr("class", "fa fa-bars")
    }
  });
  $(".dropdown").click(function () {
    console.log(1);
    $(".dropdown").toggleClass("clicked")
  })
})