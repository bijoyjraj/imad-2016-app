console.log('Loaded!');

var Tout = setTimeout(alert("trying to introduce a delay of 1 second"),5000);
clearTimeout(Tout);
// CHANGING THE MAIN TEXT, IT WAS GIVEN THE id 'text1'

var text = document.getElementById('text1');
text.innerHTML = 'Hi, I am learning client side Javascript.';

alert(`The text has changed!\nNow to mow madi`);

var image = document.getElementById('madi');
var pix = 0;
image.onclick = function(){
    image.style.textAlign = 'left';
    setInterval(movemadi,50);
};

function movemadi(){
    if(pix >500){
        pix = 0;
    }
    //pix += 1;
    image.style.marginLeft = (++pix) +'px';
}
    