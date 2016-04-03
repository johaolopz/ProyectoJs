 console.log("Inicio del programa");
 var html="";
 for (var i=1; i<=10; i++)
 
 function printList (lista)
 {
 	var listHTML = '<ol>';
 	for (var i=0; i < lista.length; i ++)
 	{
 		html += "<div>"+i+"</div>";
 		listHTML += '<li>' + lista[i][0] + ',  por: ' + lista[i][1]+'</li>';
  	}
 	listHTML += '</ol>';
 	print(listHTML);
 }
 
 function print(html)
 {
  	document.write(html);
 	console.log("Programa completado"); 
 }
 
 var playList=[];
 playList.push(["its my life","Jon Bon Jovi"]);
 playList.push(["push your hands","Plush"]);
 playList.push(["david guetta mixes","david guetta"]);
 playList.push(["5ta sinfonia de Bethoven","Bethoven"]);
 playList.push(["move your body","Eiffel 65"]);
 printList(playList);
 console.log("Programa completado");