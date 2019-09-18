var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose")

mongoose.connect("mongodb://localhost/post_it")
app.set("view engine", "html")
app.use(express.static("static"))

//SCHEMA SETUP
var note_schema = new mongoose.Schema({
    headline: String,
    detail: String
})

var Note = mongoose.model("note", note_schema)

Note.create({
    headline: "Orange",
    detail: "Oranges are citrussss!"
}, function(error, note){
    if(error){
        console.log("An error occurred --->")
        console.log(error)
    }else{
        console.log(note)
    }
})

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