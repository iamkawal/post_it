var express = require("express")
var app = express()

app.set("view engine", "html")
app.use(express.static("static"))

app.listen("3000", function(error){
    if(error){
        console.log("SOMETHING WRONG HAPPENED!")
        console.log(error)
    }else{
        console.log("Server now listening...")
    }
})

app.get("/", function(req, res){
    res.render("index")
})