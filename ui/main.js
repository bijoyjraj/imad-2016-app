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




var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    
    //make a request to the server to create entered name to a list of names and process response
    var reqlist = new XMLHttpRequest();
    reqlist.onreadystatechange = function(){
        if(reqlist.readystate === XMLHttpRequest.DONE){
            if(reqlist.status === 200){
                var listfrmServer = reqlist.responseText;
                listfrmServer = JSON.parse(listfrmServer);
                //create the required html content for the list
                var namelisthtml = "";
                for(i = 0; i < listfrmServer.length; i++){
                    namelisthtml += "<li>" + listfrmServer[i] + "</li>";
                }
                namelisthtml;
                var htmllist = document.getElementById("names");
                htmllist.innerHTML = namelisthtml;
            }
        }
    };
    //get the name given as input from the input box
    var namein = document.getElementById('namein');
    var nameinput = namein.value;
    //send requset to server
    reqlist.open("GET","http://bijoyjraj.imad.hasura-app.io/submitname?name=" + nameinput, true);
    reqlist.send();
};