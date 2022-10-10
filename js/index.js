// $(function () {
//   var arrow_l = $('.arrow-l');
//   var arrow_r = $('.arrow-r');
//   var focus = $('.focus');
//   var focusWidth = focus.outerWidth();

//   // 左右箭头
//   focus.mouseover(function () {
//     arrow_l.show();
//     arrow_r.show();
//   })
//   focus.mouseout(function () {
//     arrow_l.hide();
//     arrow_r.hide();
//   })
//   // 动态创建小圆圈 点击排他
//   var ul = $(".focus>ul")
//   var li = $(".focus>ul>li")
//   var ol = $(".focus>ol")
//   for (var i = 0; i < li.length; i++) {
//     ol.append("<li></li>")
//     $("ol>li").click(function () {
//       for (var i = 0; i < $("ol>li").length; i++) {
//         $("ol>li")[i].className = ""
//       }
//       this.className = "current"
//       //点击小圆圈滚动图片
//       var index = $("ol>li").index(this)
//       num = index
//       circle = index
//       animate(ul, -index * focusWidth)
//     })
//   }
//   $("ol>li")[0].className = "current";
//   //克隆第一张图片，放到最后
//   var first = li[0].cloneNode(true)
//   ul.append(first)
//   //点击右侧按钮滚动图片
//   var num = 0
//   var circle = 0
//   arrow_r.click(function () {
//     if (num == $(".focus>ul>li").length - 1) {
//       ul.css({
//         "left": 0
//       })
//       num = 0
//     }
//     num++;
//     animate(ul, -num * focusWidth)
//     circle++
//     if (circle == $("ol>li").length) {
//       circle = 0
//     }
//     for (var i = 0; i < $("ol>li").length; i++) {
//       $("ol>li")[i].className = ""
//     }
//     $("ol>li")[circle].className = "current"
//   })

//   arrow_l.click(function () {
//     if (num == 0) {
//       num = $(".focus>ul>li").length - 1
//       ul.css({
//         "left": -num * focusWidth + 'px'
//       })

//     }
//     num--;
//     animate(ul, -num * focusWidth)
//     circle--
//     if (circle < 0) {
//       circle = $("ol>li").length - 1
//     }
//     for (var i = 0; i < $("ol>li").length; i++) {
//       $("ol>li")[i].className = ""
//     }
//     $("ol>li")[circle].className = "current"
//   })
// })

//鼠标经过、离开 左右箭头变化  o
//动态创建小圆圈              o
//小圆圈排他                  o
//点击小圆圈切换图片          o
//点击左右箭头切换图片        
//圆圈跟随箭头一起变化        o
//*第一页和最后一页的箭头

$(function () {
  var arrow_l = $(".arrow-l")
  var arrow_r = $(".arrow-r")
  var focus = $(".focus")
  var ul = $(".focus>ul")
  var uli = $(".focus>ul>li")
  var ol = $(".focus>ol")
  var focusWidth = focus.outerWidth()


  focus.mouseover(function () {
    arrow_l.show()
    arrow_r.show()

  })
  focus.mouseout(function () {
    arrow_l.hide()
    arrow_r.hide()
  })

  for (var i = 0; i < uli.length; i++) {
    ol.append("<li></li>")
    var oli = $(".focus>ol>li")
    oli[0].className = "current" //或ol.children("li")[0].className = "current" 默认第一个圆圈
    oli.click(function () {
      for (var i = 0; i < oli.length; i++) {
        oli[i].className = ""
      }
      this.className = "current"

      var index = oli.index(this)
      num = index
      cir = index
      animate(ul, -index * focusWidth)
    })
  }

  var num = 0
  var cir = 0
  var first = uli[0].cloneNode(true)
  ul.append(first)
  arrow_r.click(function () {
    if (num == uli.length) {
      ul.css({
        "left": 0
      })
      num = 0
    }
    num++
    animate(ul, -num * focusWidth)
    cir++
    if (cir == oli.length) {
      cir = 0
    }
    for (var i = 0; i < oli.length; i++) {
      oli[i].className = ""

    }
    oli[cir].className = "current"
  })

  arrow_l.click(function () {
    if (num == 0) {
      num = uli.length
      ul.css({
        "left": -num * focusWidth + 'px'
      })
    }
    num--
    animate(ul, -num * focusWidth)
    cir--
    if (cir < 0) {
      cir = oli.length - 1
    }
    for (var i = 0; i < oli.length; i++) {
      oli[i].className = ""

    }
    oli[cir].className = "current"
  })
})