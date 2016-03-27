function numeroAlAzar()
{
	var num=Math.floor(Math.random()*100)+1;
	return num;
}

var numero = numeroAlAzar();
var contador = 0;

while (true)
{
	contador = contador+1;
	num2 = numeroAlAzar();
	if (numero === num2)
	{
		alert("El numero inicial era: "+numero);
		alert("El numero adivinado: "+num2);
		break;
	}
}

alert("El numero intentos es: "+contador);