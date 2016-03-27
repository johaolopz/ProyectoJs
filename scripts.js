function max(num1, num2)
{
	if (parseInt(num1) > parseInt(num2))
	{
		return num1;
	}
	else
	{
		return num2;
	}
}
var result = max(4,9);
alert("El numero mayor es: "+result);
