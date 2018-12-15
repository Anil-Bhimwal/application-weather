var express= require("express");
var app=express();
var request = require("request");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("weathersearch");
});

app.get("/results", function(req,res){
    var city=req.query.city;
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=3ed63bad46f44ff6938d4ad509bfc2c5";
   request(url,function(error,respose,body)
    {
       if(!error&& respose.statusCode==200)
       {
           var data=JSON.parse(body)//making an object for body
           res.render("results",{data:data});
       }
    });
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Weather app has started");
});
//"https://fcc-weather-api.glitch.me/api/current?lat=" +lat +" &lon=" +lon;
//"https://samples.openweathermap.org/data/2.5/weather?lat="+ lat+"&lon="+lon+"&appid=b6907d289e10d714a6e88b30761fae22";