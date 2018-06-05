$("#ejes").hide();

$('#tipo').on('change', function(e){
    let option = $(this).val();

    if (option=="2"){
        $('#ejes').show();
    }else {
        $("#ejes").hide();
    }
})

$(".btn").on("click", function(e){
    e.preventDefault();

    let patente = $('#patente').val();
    console.log(patente);

    let tipo = $('#tipo').val();

    switch(tipo){
        case '1': 
                    vehiculo = new Auto(patente); 
        break;
        case '2': 
                    let ejes = $('#ejes').val()
                    vehiculo = new Camion(patente, ejes);
                    vehiculo.acelerar(20); 
        break;
        default: 
                    alert ("Elija una opcion valida")
        break; 
    }

    let auto = new Auto(patente);

    //console.log(auto);
    //console.log(auto.patente);
    console.log(vehiculo);
    console.log(vehiculo.patente);

});