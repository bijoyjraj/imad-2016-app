console.log('Loaded!');

setTimeout(alert("trying to introduce a delay of 1 second"),1000);

// CHANGIN THE MAINT TEXT THE WAS GIVEN THE id 'text1'

var text = document.getElementById('text1');
text.innerHTML = 'Hi, I am learning client side Javascript.';

alert('The text has changed!');