document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
});

// Or with jQuery

$(document).ready(function () {
  $('.parallax').parallax();
});

$('#signUpModal').on('shown.bs.modal', function () {
  $('#signUp').trigger('focus')
})

$('#loginModal').on('shown.bs.modal', function () {
  $('#logIn').trigger('focus')
})
