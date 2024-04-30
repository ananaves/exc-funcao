//crie uma função que recebe por parametro o raio de um esfera e calcule o seu volume (v = 4/3*P*R^3).
// nome : Ana Carolina Menegheli Naves
var teclado = require("prompt-sync")();
var valorR = (teclado("de um valor para o raio: "));
function volume(raio) {
    var pi = 3.14;
    var valorV = (4 / 3 * pi * (valorR * valorR * valorR));
    console.log("o resultado \u00E9 ".concat(valorV));
}
volume(valorR);
