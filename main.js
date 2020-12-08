
const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');
const time = document.querySelector('.time')

const url = 'http://localhost:8080/'
var dataCome;
fetch(url)
 .then(res => res.json())
 .then(data => {
        dataCome = data;
 }  )
var todos = JSON.parse(dataCome);




class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "Editar";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "Remover";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

time.addEventListener('click',showTime);
function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var timefor = hours*60/todos.length;
    alert('voçe tem ' + timefor + 'minutos  para  realizar cada tarefa neste dia')
    
    
}

add.addEventListener('click', post);
window.addEventListener('keydown', (e) => {
	fetch(url,{
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(todos)
    })
})

function post(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


