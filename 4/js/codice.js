$().ready(function(){
		
	var root ='http://jsonplaceholder.typicode.com';

	$('#pressME').click(function(){
//settiamo le opszioni 
			var ajaxOptions={
					url:root +'/posts',
					method:'GET'
			};
//facciamo la chiamata ajax

		//prima fa la chiamata e dopo espone i dati della risposta 
				
				$.ajax(ajaxOptions).
				//dentro functioin =data possiamo chiamarlo come vogliamo 
					then(function(data){
							//console.log(data[0].title);
								
								for(i=0 ;i<10 ;i++){
								$( ".container" ).append("<div> <b>title</b><br /><br /</div>");
								$(".container").append(data[i].title);	
								$( ".container" ).append("<br /><div> <b> body </b> <br /></div> <br />");
								$(".container").append(data[i].body);
								}
	
	
					});


	});

});



