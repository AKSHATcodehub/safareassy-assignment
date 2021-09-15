const express = require("express");
const https = require("https");

const app = express();

app.get("/",function (req,res){
    
    const url ="https://api.coindesk.com/v1/bpi/currentprice.json";
    https.get(url,function(response){
        

        response.on("data",function(data){
            const coin = JSON.parse(data)
            // console.log(coin);
            const usd = coin.bpi.USD.rate;
            const gbp = coin.bpi.GBP.rate;
            const eur = coin.bpi.EUR.rate;
            
            const price = [usd,gbp,eur];
            res.send(price);
        })
    
    })


    // res.send("server get started");
    
})

let port = process.env.PORT;
if(port == null || port ==""){
    port = 3000;
}
app.listen(port,function (){
    console.log("server is running on port on 3000");
})