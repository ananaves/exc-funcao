//crie uma função que recebe por parametro o raio de um esfera e calcule o seu volume (v = 4/3*P*R^3).

// nome : Ana Carolina Menegheli Naves

const teclado=require(`prompt-sync`)();

let valorR: number=(teclado(`de um valor para o raio: `));

function volume(raio: number):void{
    const pi: number = 3.14;
    let valorV: number = (4/3*pi*(valorR*valorR*valorR))
    console.log(`o resultado é ${valorV}`)
    
}

volume(valorR)

