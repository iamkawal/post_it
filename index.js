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

function add_new_note(headline, note_detail){
	var new_a = document.createElement("a")
	var new_h5 = document.createElement("h5")
	var headline_container = document.createElement("div")
	var small_time = document.createElement("small")
	var date = new Date()
	var detail_div = document.createElement("div")
	var card_div = document.createElement("div")
	var date = new Date()
	// var edit_icon = document.createElement("img")
	var delete_icon = document.createElement("img")
	var icons = document.getElementsByClassName("icons")
	var icons_div = document.createElement("div")

	//Setting up the icons
	icons_div.id = "icons_div"
	// edit_icon.src = "icons/edit.svg"
	// edit_icon.classList.add("icons")
	delete_icon.src = "icons/delete.svg"
	delete_icon.classList.add("icons")
	icons_div.classList.add("mt-1", "d-flex", "flex-row-reverse", "bd-highlight")
	icons_div.appendChild(delete_icon)
	// icons_div.appendChild(edit_icon)

	delete_icon.addEventListener("click", function(){
		push_delete_button(this)
	})
	//This id is always unique to the newly created headline under Previous Notes and helps in making the dropdown of notes
	id = date.toDateString().slice(0,3) + Date.now().toString()

	//These  classes are needed to be in these elements for bootstrap to function properly
	headline_container.classList.add("d-flex", "w-100", "justify-content-between")
	new_a.classList.add("list-group-item", "list-group-item-action",
	 "flex-column", "align-items-start", "rounded", "mt-0", "py-0.75", "btn", "btn-primary", "collapsed","font-weight-bold") 
	new_h5.classList.add("mb-1")

	//Setting the attributes as bootstrap requires..
	new_a.setAttribute("data-toggle","collapse")
	new_a.setAttribute("href", "#" + id)
	new_a.setAttribute("role", "button")
	new_a.setAttribute("aria-expanded", "false")
	new_a.setAttribute("aria-controls", id)
	new_a.style.fontWeight = "700"

	//Again bootstrap settings
	detail_div.classList.add("collapse")
	detail_div.id = id
	card_div.classList.add("card", "card-body")

	//Adding elements to html in order they are needed
	card_div.innerText = note_detail
	detail_div.appendChild(card_div)

	new_h5.innerText = headline
	small_time.textContent = date.toDateString()
	
	headline_container.appendChild(new_h5)
	headline_container.appendChild(small_time)
	new_a.appendChild(headline_container)
	list_div.appendChild(new_a)
	new_a.after(detail_div)
	new_a.appendChild(icons_div)
	
}

submit.addEventListener("click", function(){
	if(headline.value == "" && note.value == ""){
		headline.classList.add("border-danger-2")
		note.classList.add("border-danger-2")
		note_added.classList.add("text-danger")
		note_added.textContent = "Both fields are empty!"

		setTimeout(function(){
			headline.classList.remove("border-danger-2")
			note.classList.remove("border-danger-2")
			note_added.textContent = ""
			note_added.classList.remove("text-danger")
		}, 1000)
	}
	else if(headline.value == "" && note.value != ""){
		set_and_push_notes("No headline posted", note.value )
		success_message()
	}else if(headline.value != "" && note.value == ""){
		set_and_push_notes(headline.value, "No details posted")
		success_message()
	} else{
		set_and_push_notes(headline.value, note.value)
		success_message()
		}
	//clear the fields
	headline.value = ""
	note.value = ""
	}//function
)//event listener
	
function success_message(){
	note_added.classList.add("text-success")
		note_added.textContent = "Note Posted!"
		setTimeout(function(){
			note_added.textContent = ""
			note_added.classList.remove("text-success")	
		}, 3000)
			
		no_notes.remove()
}	

function set_and_push_notes(headline, note){
	all_notes[count] = {headline:"", note:""}
	all_notes[count].headline = headline
	all_notes[count].note = note
	add_new_note(all_notes[count].headline, all_notes[count].note)
	count++
}

function push_delete_button(delete_button){
	delete_button.parentElement.parentElement.remove()
}
