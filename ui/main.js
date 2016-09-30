console.log('Loaded!');

alert('Hi, I am trying out inline javascript!! ');
setInterval(function(){},100);
// CHANGIN THE MAINT TEXT THE WAS GIVEN THE id 'text1'

var text = document.getElementById('text1');
text.innerHTML = 'Hi, I am learning client side Javascript.';

alert('The text has changed!');