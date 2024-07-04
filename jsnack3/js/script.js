//funzione click
document.getElementById('send-number').addEventListener('click', function () {
    
    //recupero valore campo input inserito dall'user
    let num = document.getElementById('number').value; 
    
    //dichiaro var che contiene somma delle cifre
    let somma = 0;

    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
});
