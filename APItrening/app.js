const express = require("express");
const https = require("https");
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=51.10&lon=17.03&exclude=hourly,daily&units=metric&appid=48fa62bf5456579753cc1fa070053ead"

const app = express();

app.get("/", function(req, res) {

    https.get(url,function(response){
        console.log(response);
    })


    res.send("Server is up and running.")
})




app.listen(3000, function() {
    console.log("Server runing on port 3000");
})