var express       = require("express"),
    app           = express(),
    mongoose      = require("mongoose"),
    body_parser   = require("body-parser")

mongoose.connect("mongodb://localhost/post_it")
app.set("view engine", "html")
app.use(express.static("static"))
app.use(body_parser.urlencoded({extended:true}))

//SCHEMA SETUP
var note_schema = new mongoose.Schema({
    headline: String,
    detail: String
})

var Note = mongoose.model("note", note_schema)

// Note.create({
//     headline: "Orange",
//     detail: "Oranges are citrussss!"
// }, function(error, note){
//     if(error){
//         console.log("An error occurred --->")
//         console.log(error)
//     }else{
//         console.log(note)
//     }
// })


app.post("/", function(req, res){
    var headline = req.body.headline
    var detail = req.body.detail
    var new_note = {headline: headline, detail: detail}
    Note.create(new_note, function(error, new_note){
        if(error){
            console.log(error)
        }else{
            console.log(new_note)
        }
    })
    console.log(new_note)
    res.send("Hello")
})

app.get("/", function(req, res){
    res.render("index")
})

app.listen("3000", function(error){
    if(error){
        console.log("SOMETHING WRONG HAPPENED!")
        console.log(error)
    }else{
        console.log("Server now listening...")
    }
})