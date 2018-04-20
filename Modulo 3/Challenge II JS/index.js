var obligatorios=document.getElementsByClassName('obligatorio');
var mjeObligatorio=document.getElementsByClassName('mjeObligatorio');
var selectCiudad=document.getElementById('selectCiudad');
var selectProvincia=document.getElementById('selectProvincia');
var paises = [ "Argentina", "Uruguay", "Brasil", "Paraguay", "Chile", "Perú", "Venezuela", "Ecuador", "Colombia"];
var tiposDoc = ["DNI", "LI", "LC", "LE"];
var provincias=['Chaco', 'Corrientes', 'Cordoba', 'Buenos Aires'];
var ciudades=[{nombre:'Resistencia', id:0}, {nombre:'Fontana', id:0}, {nombre: 'Barranqueras', id:0}, {nombre:'Corrientes Cap.', id:1}, {nombre: 'Goya', id:1}, {nombre:'Mantilla', id:1}, {nombre: 'Cordoba Cap.', id: 2}, {nombre:'San Roque', id: 2}, {nombre: 'Gral Belgrano', id: 2}, {nombre:'Pilar', id: 3}, {nombre:'Zarate', id:3} ]

function calcularEdad(f){//calcula la edad
	if (f!='') {
		console.log(f);
		var fecha=f.split('-');
		var hoy = new Date();
		var dd = hoy.getDate();
		var mm = hoy.getMonth()+1;
		var yyyy = hoy.getFullYear();

		var edad=yyyy-fecha[0];
		if ((fecha[1]>mm)||(fecha[1]=mm && fecha[2]>dd)){
			edad=yyyy-fecha[0]-1;
		}
		return edad;
		console.log(edad);		
	}
}

function validarFormulario(){
	var valido=true; 
	var obligatorioMail=document.getElementById('obligatorioMail');
	var obligatorioTelefono=document.getElementById('obligatorioTelefono');
	var selectFNacimiento=document.getElementById('fechaNacimiento');
	var generoM=document.getElementById('generoM');
	var generoF=document.getElementById('generoF');
	var mjeSexoObligatorio=document.getElementById('mjeSexoObligatorio');
	for (var i=0; i<obligatorios.length; i++){//valida todos los campos obligatorios
		if (obligatorios[i].value=='') {
			mjeObligatorio[i].innerHTML='Campo obligatorio';
			valido=false;
		}
	}

	if (obligatorioMail.value!="") {//valida formato de correo electrónico
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(obligatorioMail.value))){
			var mjeEmailObligatorio=document.getElementById('mjeEmailObligatorio');
			mjeEmailObligatorio.innerHTML='Email icorrecto';
			valido=false;
		}
	}
	
	if (obligatorioTelefono.value!="") {//valida formato de teléfono(000-00000000)
		if (!(/^([0-9]{3})+(-){0,1}([0-9]{8})$/i.test(obligatorioTelefono.value))) {
			var mjeTelefonoObligatorio=document.getElementById('mjeTelefonoObligatorio');
			mjeTelefonoObligatorio.innerHTML='Teléfono incorrecto';
			valido=false;
		}
	}

	if (!((generoF.checked==true)||(generoM.checked==true))) { //valida selección de sexo
		mjeSexoObligatorio.innerHTML='Campo obligatorio'; //ver con querySelectorAll(eso sería para cuando tengo mas de dos opciones pero para este caso basta con ésto)
		valido=false;
	}
	
	if (calcularEdad(fechaNacimiento.value) <18){
	//mjeMayorEdad.innerHTML="es menor de edad"; si solo quiro pintar un mje en rojo y no mostrar un alert
	alert('Debes ser mayor de edad');
	valido=false;
	}

	return valido;

}


function listaPaises() {
    var pais= document.getElementById('pais')
    for (i = 0; i < paises.length; i++) {
      var option = document.createElement('option');
      pais.appendChild(option);
      option.textContent = paises[i];
    }
  }

  function Documento() {
    var tipoDoc = document.getElementById('tipoDoc');
    var i;
    for (i = 0; i < tiposDoc.length; i++) {
      var option = document.createElement('option');
      tipoDoc.appendChild(option);
      option.textContent = tiposDoc[i];
    }
  }
  function cargarSelect(hijo,padre){//función para cargar selects	
    for (var i=0; i<hijo.length;i++){
      var option=document.createElement('option');
      option.innerHTML=hijo[i];
      option.value=i;
      padre.appendChild(option);
    }
  }
  
  function cargarCiudades(){//función para cargar ciudades según Provincias
    selectCiudad.innerHTML="";
    var optionProvincia=selectProvincia.value;
    for (var i=0; i<ciudades.length; i++) {
      if(ciudades[i].id==optionProvincia){
        var option=document.createElement('option');
        option.innerHTML=ciudades[i].nombre;
        option.value=i;
        selectCiudad.appendChild(option);
      }
    }
  }




  function borrarMjeError(){//borra todos los mjes de error de campos obligatorios y mjes de error 
    var mjeBlanco=document.getElementsByClassName('mjeBlanco');
    for (var i=0; i<mjeBlanco.length; i++){
      mjeBlanco[i].innerHTML='';
    }
  }

  function borrarInputs(){//pone en blanco los imputs(limpia el formulario)
    var inputs=document.getElementsByTagName('input');
    var inputsArray=Array.from(inputs);
    inputsArray.forEach(function(e){		
      if ((e.type=='checkbox') || (e.type=='radio')){
        e.checked=false;
      }
      else{
        e.value='';
      }
    });
  }
  
  
  function enviarFormulario(){//si todos los campos son correctos->envía y borra los imputs
    if (validarFormulario()){
    /*var form=document.getElementById('inscripcion');
    form.submit(); por qué cuando descomento hace lo que hace??*/
    borrarInputs();
    }
  }
  

  function limpiar (){
    var inputs = document.getElementsByTagName('input');
    console.log (inputs);

    var inputsArray = array.from(inputs);
    console.log(inputsArray);

    inputsArray.forEach(function(e){
      //console.log(e);
      if(e.type == 'checkbox'){
        e.checked = false;
      } else {
         e.value= "";
      }
    });

  }

  var btnRem = document.getElementById('btn-limpiar');
  btnRem.addEventListener('click', limpiar);


  function enviarFormulario(){//si todos los campos son correctos->envía y borra los imputs
    if (validarFormulario()){
    /*var form=document.getElementById('inscripcion');
    form.submit(); por qué cuando descomento hace lo que hace??*/
    borrarInputs();
    }
  }
  

  listaPaises();
  Documento();
  cargarSelect(provincias,selectProvincia);


  var boton = document.getElementById('enviar');
  selectProvincia.addEventListener('change', cargarCiudades);
  
  boton.addEventListener('click', borrarMjeError);
  boton.addEventListener('click', enviarFormulario);