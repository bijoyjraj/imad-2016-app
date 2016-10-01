console.log('Loaded!');
/*
var Tout = setTimeout(alert("trying to introduce a delay of 1 second"),5000);
clearTimeout(Tout);
*/
// CHANGING THE MAIN TEXT, IT WAS GIVEN THE id 'text1'

var text = document.getElementById('text1');
text.innerHTML = 'Hi, I am learning client side Javascript.';

var image = document.getElementById('madi');
var pix = -500;
var InRet;
image.onclick = function(){
    //image.style.textAlign = 'left';
     InRet = setInterval(movemadi,10);
};
/*
image.onclick = function (){
    clearInterval(InRet);
};*/
function movemadi(){
    if(pix >500){
        pix = -500;
    }
    image.style.marginLeft = pix +'px';
    pix += 1;
}

//Implementing a counter

Count = doucument.getElementById('counter');
Count.onclick = function (){
    var response = new XMLhttpRequest();
    request.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            if (httpRequest.status === 200) {
                // perfect!
                var count = response.responseText;
                var countspan = document.getElementById('count');
                countspan.innerHTML = count.toString();
            }
        } 
    };
    response.open("GET","http://bijoyjraj.imad.hasura-app.io/counter",true);
    response.send();
};
    