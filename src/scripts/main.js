const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	const li = document.createElement("li"); // cria um elemento "li"
	li.appendChild(document.createTextNode(input.value)); //transforma o texto do campo de entrada em texto li
	ul.appendChild(li); //adiciona li a ul
	input.value = ""; // Redefinir campo de entrada de texto

    // Adiciona uma class para tag "li" 
    li.classList.toggle('item');

	//INICIAR TACHADO
	// porque está na função, só adiciona para novos itens
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	// FIM DO RISCO


	// INICIAR ADICIONAR BOTÃO EXCLUIR
	const dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("x"));
    
    dBtn.classList.toggle('ico-delete');
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// FIM ADICIONAR BOTÃO EXCLUIR


	//ADICIONAR EXCLUSÃO DE CLASSE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { // Garante que um campo de entrada vazio não crie um li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //isso agora verifica se você clicou em "enter"/"return"
		//the 13 é o código da tecla Enter, também pode ser exibido por event.keyCode === 13
		createListElement();
	} 
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

