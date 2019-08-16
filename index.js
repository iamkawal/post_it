var headline = document.getElementById("headline")
var note = document.getElementById("body_text")
var submit = document.getElementById("submit")
var view = document.getElementById("view")
var note_added = document.getElementById("note_added")
var count=0
var all_notes= []

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
	}

	//clear the fields
	headline.value = ""
	note.value = ""
	note_added.value = "Note added!"
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



