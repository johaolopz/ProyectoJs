var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var diasPorMes = 30;
var mesesPorAño = 12;
var segundosPorAño = segundosPorMinuto * minutosPorHora * horasPorDia * diasPorMes * mesesPorAño;
var edadUsuario = prompt ("Estimado usuario, ingrese su edad: ");
edadUsuario = edadUsuario * segundosPorAño;
document.write ("<h1>Calculadora del tiempo</h1><p>Usted ha vivido "+edadUsuario+" segundos</p>");