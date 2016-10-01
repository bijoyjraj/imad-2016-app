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
//inputting a name


var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    //make a requset to the server
    var namein = document.getElementById('namein');
    var nameinput = namein.value;
    //create the required html content for the list
    var list = [];
    for(i = 0; i < 5; i++){
        list.push(nameinput + (i+1).toString());
    }
    var namelist = "";
    for(i = 0; i < list.length; i++){
        namelist += "<li>" + list[i] + "</li>";
    }
    var listnew = document.getElementById("names");
    listnew.innerHTML = namelist;
};