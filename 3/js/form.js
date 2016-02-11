$().ready(function(){
//QUANDO NELLA CONSOLE SCHIACCCIAMO QULSIASI TASTO NELLA CONSOLE VIENE SCRITTO LA PAROLA REGISTRATA E LA TIENE IN MEMORIA 
	$('input[type="email"]').keyup(function(){
		console.log($(this).val());
		//dentro la casella dell email lo stesso testo in un altra div sotto un il testo 
		$( "#ciccio" ).html($(this).val()) ;
	});
	

});