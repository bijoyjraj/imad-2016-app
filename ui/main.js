console.log('Loaded!');

//Implementing a counter

Count = document.getElementById('counter');
Count.onclick = function (){
    var response = new XMLHttpRequest();
    response.onreadystatechange = function(){
        if (response.readyState === XMLHttpRequest.DONE) {
            // everything is good, the response is received
            if (response.status === 200) {
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
    