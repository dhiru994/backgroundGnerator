var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var btn = document.getElementById("del");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

 // Create a <button> element

 var bt = document.createElement("BUTTON");
  bt.classList.add("mystyle");
btn.innerHTML = "del";                   // Insert text
li.appendChild(btn);
	input.value = "";
}
function deleteListElement(){
	var e = document.querySelector("ul");
		e.innerHTML = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
btn.addEventListener("click", deleteListElement);
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
