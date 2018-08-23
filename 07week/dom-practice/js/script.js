'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  window.onload = function(){

    var counts = document.getElementsByTagName('ul')
      console.log(counts[0].children.length)

      var count =
      document.querySelectorAll('li')
      console.log(count.length);

      document.querySelector('h1').insertAdjacentHTML('afterEnd', '<h2> + count.length + 'items in your shopping cart''
  // var list = document.getElementsByTagName('ol');

  // var message = "You have _items in your shopping cart." + list.children.length + "items";



  var newh1 = document.createElement('h1');
  newh1.innerHTML = 'You have ${counts[0].children.length} items in your shopping cart';
  document.getElementByTagName('h1').appendChild(newh1);
});
