$(document).ready(function() {
  $('#header').load('/header.html', '', function() {
    $.material.init();
  });
  $('#footer').load('/footer.html', '', function() {
    $.material.init();
  });
  $.material.init();
});