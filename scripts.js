console.log("Inicio programa");
//Pedimos un numero al usuario y lo guardamos en una variable
var numeroUsuario = prompt("Ingrese un numero del 1 al 5: ");
var numeroAdivinar = 3;
//Comparamos con if
if (parseInt(numeroUsuario) === numeroAdivinar)
{
	adivinoCorrectamente = true;

}
//Si no adivina, damos ayuda y volvemos a pedir que ingrese numero
	else if (parseInt(numeroUsuario) > numeroAdivinar)
	{
		alert("El numero que ingresaste es mayor");
		var nuevoIntento = prompt("Intenta de nuevo, ingresa un numero del 1 al 5: ");
		if (parseInt(nuevoIntento) === numeroAdivinar)
		{
			adivinoCorrectamente = true;
		}
		else
		{
			adivinoCorrectamente = false;
		}
	}
	else if (parseInt(numeroUsuario) < numeroAdivinar)
	{ 
		alert("El numero que ingresaste es menor");
		var nuevoIntento = prompt("Intenta de nuevo, ingresa un numero del 1 al 5: ");
		if (parseInt(nuevoIntento) === numeroAdivinar) 
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