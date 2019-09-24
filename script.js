//SELECTORS

var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');
var listItems = document.getElementsByTagName('li');


function createItem(){
	var li = document.createElement('li');
	li.innerHTML = input.value;
	ul.appendChild(li);
	input.value = "";

	var delBtn = document.createElement('button');
	delBtn.innerHTML = "Delete";
	listItems[i].appendChild(delBtn);
	delBtn.onclick = delItem;
}


function addListAfterClick(){
	if (input.value.length > 0) {
		createItem();	
	}
}

function addListAfterEnter(event){
	if (input.value.length > 0 && event.which == 13) {
	createItem();	
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

	

ul.onclick = function(event){
	event.target.classList.toggle('done');
}


function createDel(){
	var delBtn = document.createElement('button');
	delBtn.innerHTML = "Delete";
	listItems[i].appendChild(delBtn);
	delBtn.onclick = delItem;
}


for(var i = 0; i < listItems.length; i++){
	createDel();
}


function delItem(evt){
	evt.target.parentNode.remove();
}