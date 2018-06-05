function cambio() {
    
    $('#largo').on('click', function(e){
        $(this).toggleClass("arriba arribaToggle")
    })
    
    //Hace que, al clickear el primer cuadrado de la segunda fila, se modifique el segundo
    
    $('#izquierda').on('click', function(e){
        $(this).siblings().toggleClass("cambioMedio cambioMedioToggle");
    })
    
    $('#derecha').on('click', function(e){
        $(this).siblings().toggleClass("cambioMedio cambioMedioToggle");
    })
    //Hace que, al clickear el elemento del medio de la tercera fila, se modifiquen los de los costados


        $('#dos').on('click', function(e){
            $(this).siblings().toggleClass("cambioAbajo cambioAbajoToggle");
            })
        
    }
    
    cambio()