var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    article_1 :{
        title : 'Article 1',
        heading: 'Article #1 | Bijoy J Raj',
        date: 'Sep 29 2016',
        link1:'/article_3',
        link2:'/article_2',
        content: 
        `   <p>
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
            </p>
            <p>
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
            </p>
            <p>
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
            </p>
            <p>
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
                This being my first experience making web applications, I am extremey excited!
            </p>`
    },
    article_2 :{
        title : 'Article 2',
        heading: 'Article #2 | Bijoy J Raj',
        date: 'Sep 29 2016',
        link1:'/article_1',
        link2:'/article_3',
        content: 
        `<p>
            This course is taking a lot of time. It is exciting and interesting even while it is tiring.
            Looking foward to completing this course!!!
        </p>
        `
    },
    article_3 :{
        title : 'Article 3',
        heading: 'Article #3 | Bijoy J Raj',
        date: 'Sep 29 2016',
        link1:'/article_2',
        link2:'/article_1',
        content: 
        `<p>
            This is the third article. Time is 11:34 PM and I really regret not following the course daily.
            Now I am 4 videos and one assignment behind :(
        </p>
        `
    },
};

function makepage(data){
    var page =
        `<html>
            <head>
                <title>
                   ${data.title}
                </title>
                <meta name = "viewport" content = "width-device-width, initial-scale-1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class = 'links'>
                    <a href='/'>Home</a>
                    <a href=${data.link1}>Previous</a>
                    <a href=${data.link2}>Next</a>
                </div>
                <div>
                    <h3>
                    ${data.heading}
                    </h3>
                </div>
                <hr/>
                <div>
                    ${data.date}
                </div>
                <hr/>
                <div class = 'body1'>
                    ${data.content}
                </div>
                <hr/>
            </body>
        </html>`;
    return page;
}

var counter = 0;
app.get('/counter', function(req, res){
    counter++;
    res.send(counter.toString());
});

app.get('/:article', function(req, res){
   res.send(makepage(articles[req.params.article])); 
});
/*
app.get('/article_1', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article_1.html'));
});

app.get('/article_2', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article_2.html'));
});

app.get('/article_3', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article_3.html'));
});*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
