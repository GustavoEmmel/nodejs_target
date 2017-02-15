module.exports = {
		par: function par(valor){
			if(parseFloat(valor) % 2 == 0){
				console.log('eh par');
			} else {
				console.log('nao eh par');
			}
		},
		impar: function impar(valor){
			if(parseFloat(valor) % 2 != 0){
				console.log('eh impar');
			} else {
				console.log('nao eh impar');
			}
		},
		primo: function primo(valor){

		}
}