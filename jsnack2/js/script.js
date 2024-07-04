//array vuoto
let = numbers = [   ];

//ciclo di 6 iterazioni
for (let i=0; i<6; i++) {
    //permetto all'user di inserire numero
    let num = prompt('inserisci un numero');

    //verifico se il num è dispari
    if (num % 2 != 0) {
        //metto nell'array
        numbers.push(num)
    }
}

//mostro array 
console.log(numbers);