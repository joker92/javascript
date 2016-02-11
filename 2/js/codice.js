
//andiamo ad iserire la libreria di jquery

//ready serve per dire che quando la pagina e pronta lancia il javascript

//il ready si scrive solo una volta e poi scriviamo al suo contenuto tutto il javascript



$().ready(function (){



//var listItem=$(document.body.children[0]);    //document e tutto il documento da <html>a </html> il document con va gli apici perche none un contenuto tipo 'li'
//console.log(listItem);
//tutto quello che e dentro il body si chiamoano children 
var listItem=$('li');
//prende solo html  e non funzionano imetodi jquery
var first=listItem[0];
console.log(first);

//per rimuove  il ciao nell html
//first.remove();

// con eq  prende sia l html che il jquery
var first=listItem.eq(0);
console.log(first);
	
//per testare sul li se abbiamo la classe special

for(var i=0;i<listItem.length;i++){

	var elem=listItem.eq(i);
	if(elem.is('.special')){
		elem.removeClass('special');
		elem.addClass('bomba');
	}
}



});
