$().ready(function (){
	var listItem=$('h1');
	var listItem2=$('h2');



//aggiunge il colore schiacciando il tasto invia

$( "#target" ).click(function() {
	for(i=0;i<listItem.length;i++){
		var elem=listItem.eq(i);
		elem.addClass('red');

	}

	
	for(i=0;i<listItem2.length;i++){
		var elem=listItem2.eq(i);
		elem.addClass('green');
	}

});
//toglie il colore schiaccianndo il tasto remove
$( "#remove" ).click(function() {
	for(i=0;i<listItem.length;i++){
		var elem=listItem.eq(i);
		elem.removeClass('red');

	}

	
	for(i=0;i<listItem2.length;i++){
		var elem=listItem2.eq(i);
		elem.removeClass('green');
	}

});

$( "#add" ).click(function() {
	for(var i=0;i<listItem.length;i++){
		var elem=listItem.eq(i);
		if(elem.is('.red ')){
			elem.removeClass('red ');
			$('h1').html('ciao sono h1');
			
		}else{
			elem.addClass('red ');
			$('h1').html('ciao sono rosso');
			
		}
	}
	for(var i=0;i<listItem2.length;i++){
		var elem=listItem2.eq(i);
		if(elem.is('.green')){
			elem.removeClass('green ') ;
			$('h2').html('ciao sono h2');
			
		}else{
			elem.addClass('green');
			$('h2').html('ciao sono verde');
			
		}
	}
})

});


