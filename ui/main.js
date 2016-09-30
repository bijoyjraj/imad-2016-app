console.log('Loaded!');

var Tout = setTimeout(alert("trying to introduce a delay of 1 second"),5000);
clearTimeout(Tout);
// CHANGIN THE MAINT TEXT THE WAS GIVEN THE id 'text1'

var text = document.getElementById('text1');
text.innerHTML = 'Hi, I am learning client side Javascript.';

alert(`The text has changed!\nNow to mow madi`);

var image = document.getElementById('madi');
function movemadi(){
    image.style.marginLeft = 0;
}
image.onclick = movemadi();