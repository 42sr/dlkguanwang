function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.position().left) / 10;
    step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.position().left == target) {
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
    }
    obj.css({
      "left": obj.position().left + step + 'px'
    })
  }, 15);
}