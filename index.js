var count=0
var all_notes= []
var headline = document.getElementById("headline")
var note = document.getElementById("body_text")
var submit = document.getElementById("submit")
var view = document.getElementById("view")
var note_added = document.getElementById("note_added")
var no_notes = document.getElementById("no_notes")
var main_div_2 = document.getElementById("main_div_2")

function add_new_div(headline, note){
	var new_div = document.createElement("div")
	var new_p = document.createElement("p")
	new_div.style.width = "80%"
	new_div.style.width = "80%"
	new_div.style.height = "5%"
	new_div.style.border = "solid purple"
	new_div.style.marginTop = "5px"
	new_div.style.cursor = "pointer"

	new_p.innerText = headline
	new_p.style.padding = "6px 0 0 5px"
	new_p.style.margin = "auto"

	new_div.appendChild(new_p)
	main_div_2.appendChild(new_div)

	new_div.addEventListener("click", function(){
		console.log(note)
	})
	
}

submit.addEventListener("click", function(){
	if(headline.value != "" || note.value != ""){
		all_notes[count] = {headline:"", note:""}
		all_notes[count].headline = headline.value
		all_notes[count].note = note.value
		count++

		note_added.textContent = "Note Posted! Click on View Notes to view all the notes"
		setTimeout(function(){
			note_added.textContent = ""
		}, 3000)

		no_notes.textContent = ""

		add_new_div(headline.value, note.value)
	}

	//clear the fields
	headline.value = ""
	note.value = ""
})

view.addEventListener("click", function(){
	if(all_notes.length != 0){
		for (let index = 0; index < all_notes.length; index++) {
		console.log("Note %d.\n", index+1)
		console.log("Headline -->\n %s\n", all_notes[index].headline)
		console.log("Note -->\n %s\n", all_notes[index].note)
		}
	}	
})





