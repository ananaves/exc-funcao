//Crie uma função que liste todos os números primos até 1000.
//Número primo é aquele que é divisível somente por 1 e por ele mesmo.


function nPrimo(n1: number, div: number = 2): boolean{
  
    if (n1 % div == 0){
        return n1 == div;
    }
    
    return nPrimo(n1,div+1);
}


function listNPrimo(n2: number, nx: number=1000): void{
    if (nPrimo(n2)) {
        console.log(n2);
    }
}







