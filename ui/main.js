console.log('Loaded!');

var Tout = setTimeout(alert("trying to introduce a delay of 1 second"),5000);
clearTimeout(Tout);
// CHANGING THE MAIN TEXT, IT WAS GIVEN THE id 'text1'

var text = document.getElementById('text1');
text.innerHTML = 'Hi, I am learning client side Javascript.';

alert(`The text has changed!\nNow to mow madi`);

var image = document.getElementById('madi');
image.onclick = function(){
    var pix = 0;
    setInterval(movemadi(++pix),50);
};

function movemadi(dist){
    if(dist >2500){
        image.style.textAlign = 'left';
    }
    image.style.marginLeft = dist +'px';
}
    