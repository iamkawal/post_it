var count       =      0,
all_notes       =      [],
headline        =      document.getElementById("headline"),
note            =      document.getElementById("body_text"),
submit          =      document.getElementById("submit"),
view            =      document.getElementById("view"),
note_added      =      document.getElementById("note_added"),
no_notes        =      document.getElementById("no_notes"),
main_div_2      =      document.getElementById("main_div_2"),
note_headings   =      document.getElementsByClassName("note_heading"),
list_div        =      document.getElementById("list-group")

function add_new_note(headline, note){
	var new_a = document.createElement("a")
	var new_h5 = document.createElement("h5")
	var headline_container = document.createElement("div")
	var small_time = document.createElement("small")
	var new_p = document.createElement("p")

	headline_container.classList.add("d-flex", "w-100", "justify-content-between")
	new_a.classList.add("list-group-item", "list-group-item-action",
	 "flex-column", "align-items-start", "rounded", "mt-2") 
	new_h5.classList.add("mb-1")

	
	// new_div.style.width = "80%"
	// new_div.style.width = "80%"
	// new_div.style.height = "5%"
	// new_div.style.border = "solid purple"
	// new_div.style.marginTop = "5px"
	// new_div.style.cursor = "pointer"

	new_p.innerText = headline
	small_time.textContent = "3 days ago"
	// new_p.style.padding = "6px 0 0 5px"
	// new_p.style.margin = "auto"
	
	headline_container.appendChild(new_h5)
	headline_container.appendChild(small_time)
	new_a.appendChild(headline_container)
	new_a.appendChild(new_p)
	list_div.appendChild(new_a)
	
}

submit.addEventListener("click", function(){
	if(headline.value != "" || note.value != ""){
		all_notes[count] = {headline:"", note:""}
		all_notes[count].headline = headline.value
		all_notes[count].note = note.value
		count++

		note_added.classList.add("text-success")
		note_added.textContent = "Note Posted!"
		setTimeout(function(){
			note_added.textContent = ""
			note_added.classList.remove("text-success")	
		}, 3000)
			
		no_notes.textContent = ""

		add_new_note(headline.value, note.value)
	}else if(headline.value == "" && note.value == ""){
		headline.classList.add("border-danger-2")
		note.classList.add("border-danger-2")
		note_added.classList.add("text-danger")
		note_added.textContent = "Both fields are empty!"

		setTimeout(function(){

		})
		setTimeout(function(){
			headline.classList.remove("border-danger-2")
			note.classList.remove("border-danger-2")
			note_added.textContent = ""
			note_added.classList.remove("text-danger")
		}, 1000)

	}

	//clear the fields
	headline.value = ""
	note.value = ""
})
	
for(var i=0; i< note_headings.length; i++){
	note_headings[i].addEventListener("click", function(){
		console.log("clicked on a note heading")
		note_headings[i].style.background = "black"
	})
}

