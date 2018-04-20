var btnEnviar = document.getElementById("btnEnviar");
var lista = document.getElementById("lista");
var contador = 0; // para generar ids para cada tarea



function agregarTarea() {
	contador++;
	var tarea = document.createElement("li"); // crea item
	var checkbox = document.createElement("input"); // 
	checkbox.setAttribute("type", "checkbox");
	var textbox = document.getElementById("input"); // trae el texto del input
	tarea.innerHTML = textbox.value; // lo mete en la tarea
	tarea.setAttribute("id", contador); // genera id para la tarea
	textbox.value = ""; // vacía el input
	textbox.style.color='rebeccapurple';
	tarea.style.color='rebeccapurple';
	tarea.style.fontWeight='bold';

	var btnEliminar = document.createElement("button"); // crea botón para eliminar tarea
	btnEliminar.setAttribute("id", "btnEliminar");
	var foto = document.createElement("img");
	foto.src = "img/delete.svg";
	foto.style.width = "10px";
	btnEliminar = foto;
	btnEliminar.addEventListener("click", eliminarTarea);
	function eliminarTarea() {
		tarea.remove();
	}

	var btnEditar = document.createElement("button"); // crea botón para eliminar tarea
	btnEditar.setAttribute("id", "btnEditar");
	var foto2 = document.createElement("img");
	foto2.src = "img/edit.svg";
	foto2.style.width = "10px";
	btnEditar = foto2;
	btnEliminar.addEventListener("click", editarTarea);
	function editarTarea() {
		tarea.edit();
	}




	tarea.appendChild(btnEliminar); // agrega el botón de eliminar a la tarea
	tarea.appendChild(btnEditar); // agrega el botón de eliminar a la tarea
	lista.appendChild(tarea); // agrega el item a la lista
}

btnEnviar.addEventListener("click", agregarTarea);


/*
$('#btnNuevo').on('click', function (event){
	var t = ('#nueva').val();
	lista.push(t);
	var li='<li id="'+lista.lenght+'">'+ t + '<button class = "borrar" data.id="'+lista.lenght+'"> x </button> </li>';
	$('#todo').append(li);
})

$('.borrar').on('click', function(e){
	$(this).parent().remove();
})


*/