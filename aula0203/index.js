var xyz 			= require('./hello');
var human 			= require('./human');
var calculadora 	= require('./calculadora');
var calculos		= require('./calculos');

xyz('Olá pessoal');
human.hello('Olá galera');

calculadora.soma(1, 2);
calculadora.subtracao(4, 2);
calculadora.divisao(8, 2);
calculadora.multiplicacao(2, 4);


calculos.par(2);
calculos.impar(2);
