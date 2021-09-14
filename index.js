const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

var app = express();
const router = express.Router();



app.listen(4456, () => {
 console.log("Server running on port 4456");
 console.log("Let's screw the Karens");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/',(request,response) => {
    console.log(request.body);
    fs.appendFile('list.txt', JSON.stringify(request.body), function (err) {
        if (err) throw err;
        console.log(`The ${JSON.stringify(request.body)} was appended to file!`);
    });
    fs.appendFile('list.txt', '\n', function (err) {
        if (err) throw err;
        console.log(`The ${JSON.stringify(request.body)} was appended to file!`);
    });
});

app.use("/", router);




