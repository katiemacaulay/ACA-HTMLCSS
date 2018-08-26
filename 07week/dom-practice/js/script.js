'use strict';

  window.onload = function(){

    let list = document.getElementsByTagName('li');

    // window.alert('You have ' + list.length + ' items in your shopping cart')

    var h1 = document.querySelector('h1')
      h1.insertAdjacentHTML('afterEnd',
      '<h1>You have ' + list.length + ' items in your shopping cart</h1>');

    // Another way of adding a tag
      // let newh1 = document.createElement('h1');
      // newh1.innerHTML="You have " + list.length + " items in your shopping cart"
      // document.querySelector('h1').appendChild(newh1);

        let input = document.createElement('input');
        input.innerHTML = "";
        document.querySelector('ul').appendChild(input);

        let button = document.querySelector('ul');
        // Possibly another way to make this button work:
        // button.setAttribute("type", "button");
        button.insertAdjacentHTML('beforeEnd',
        '<button onclick="myFunction()"> Add to List </button>');

        function myFunction(){
          ul.push(input);
        }
}
