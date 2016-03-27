console.log("Inicio programa");
var numeroUsuario = prompt("Ingrese un numero del 1 al 5: ");
var numeroAdivinar = 3;
if (parseInt(numeroUsuario) === numeroAdivinar)
{
	adivinoCorrectamente = true;

}
	else if ((parseInt(numeroUsuario) > numeroAdivinar)) 
	{
		alert("El numero que ingresaste es mayor");
		var nuevoIntento = prompt("Intenta de nuevo, ingresa un numero del 1 al 5: ");
		if ((parseInt(nuevoIntento) === numeroAdivinar)) 
		{
			adivinoCorrectamente = true;
		}
		else
		{
			adivinoCorrectamente = false;
		}
	}
	else if ((parseInt(numeroUsuario) < numeroAdivinar))
	{ 
		alert("El numero que ingresaste es menor");
		var nuevoIntento = prompt("Intenta de nuevo, ingresa un numero del 1 al 5: ");
		if ((parseInt(nuevoIntento) === numeroAdivinar)) 
		{
			adivinoCorrectamente = true;
		}
		else
		{
			adivinoCorrectamente = false;
		}
	}
if (adivinoCorrectamente)
{
document.write("<p>Adivinaste. Good Job.!!!</p>");	
}
else
{
document.write("<p>No adivinaste, intentalo de nuevo =(</p>");
}
console.log("Programa completo");