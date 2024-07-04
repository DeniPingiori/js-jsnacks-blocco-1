//funzione click
document.getElementById('send-number').addEventListener('click', function () {
    
    //recupero valore campo input inserito dall'user
    let num = document.getElementById('number').value; 
    
    
//verifico che il valore inserito sia lungo esattamente 4 cifre
    if(num.length === 4){

        //dichiaro var che contiene somma delle cifre
        let somma = 0;
         for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
        somma += parseInt(num[i]);
        
        }
        console.log(somma);
    }
    else {
        alert('non hai inserito un valore di 4 cifre, ma inferiore o superiore');
    }
});
