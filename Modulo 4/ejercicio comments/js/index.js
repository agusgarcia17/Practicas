$(document).ready(function(e){
    
    $.ajax({
           method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments"
}) 

.done(function(response){
    console.log(response);

    let div = $('#resultados');
    $.each(response.function (index, elem) {
  
            
        }
        
    });

}); 

})