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

var producto=[];
producto.push("arroz");
producto.push("papa");
producto.push("aceite");
producto.push("cebolla");
producto.push("aliño");


while (true)
{
	var prodSearch = prompt ("Ingrese el producto que desea buscar,  (q) para salir o (l) para mostrar lista: ");
	if (prodSearch == "q")
	{
		break;
	}
	else if (prodSearch == "l")
	{
		printList(producto);
	}
	else
	{
		var encontrado = producto.indexOf(prodSearch);
		if (encontrado >= 0)
		{
			alert ("Si tenemos el producto en stock");
		}
		else if (encontrado < 0)
		{
			alert ("producto no encontrado");
		}
	}
}


console.log("Programa completado");