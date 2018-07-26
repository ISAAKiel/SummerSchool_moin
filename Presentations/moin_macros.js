// https://github.com/gnab/remark/issues/72
// https://slides.yihui.name/xaringan/#33
// Usage:
//   ![:scale 50%](image.jpg)

remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};
