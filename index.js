const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

var app = express();
const router = express.Router();

var time = new Date();


app.listen(80, () => {
 console.log("Server running on port 80");
 console.log("Let's screw the Karens");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/*',(request,response) => {
    console.log(time)
    console.log(request.body);
    fs.appendFile('list.txt', time, function (err) {
        if (err) throw err;
        console.log(`The ${JSON.stringify(request.body)} was appended to file!`);
    });
    fs.appendFile('list.txt', JSON.stringify(request.body), function (err) {
        if (err) throw err;
    });
    fs.appendFile('list.txt', '\n', function (err) {
        if (err) throw err;
    });
});

router.post('/',(request,response) => {
    console.log(time)
    console.log(request.body);
    fs.appendFile('list.txt', time, function (err) {
        if (err) throw err;
        console.log(`The ${JSON.stringify(request.body)} was appended to file!`);
    });
    fs.appendFile('list.txt', JSON.stringify(request.body), function (err) {
        if (err) throw err;
    });
    fs.appendFile('list.txt', '\n', function (err) {
        if (err) throw err;
    });
});

app.use("/", router);




