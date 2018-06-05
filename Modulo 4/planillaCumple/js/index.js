var jsonCumple = {};
var cumples = [];

//localStorage.clear();

var datosGuardados= localStorage.getItem('cumples');

if(datosGuardados == null) {
    var cumples = [];
}else{
    cumples= JSON.parse(datosGuardados).cumples;
}

console.log(datosGuardados);
$('#Guardar').on('click', function(e){
    let Datos = {
        nombre: $("#Nombre").val(),
        fechaNac: $("#fechaNac").val(),
        imagen: $("#elegida").val()
    };
    console.log(Datos);
    cumples.push(Datos);

    console.log(cumples);

    jsonCumple =  {
        'cumples': cumples,
        'total': cumples.length
    }

    console.log(jsonCumple);

    let data = JSON.stringify(jsonCumple);
    localStorage.setItem('cumples', data);


    var input = $('input');
    $.each(input, function(indice, elemento){
        if (elemento.type != 'button'){
            $(elemento).val('');
        } 
    })
})
$('img').on('click',function(e){
   $("#elegida").val( $(this).data('nombre'));
})

