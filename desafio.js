console.log("Inicio del programa");

function printList (lista)
{
	var listHTML = '<ol>';
	for (var i=0; i < lista.length; i ++)
	{
		listHTML += '<li>' + lista[i] + '</li>'
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html)
{
	document.write(html);
}

var playList=[];
playList.push("its my life");
playList.push("push your hands");
playList.push("david guetta mixes");
playList.push("5ta sinfonia de Bethoven");
playList.push("move your body");
printList(playList);
console.log("Programa completado");