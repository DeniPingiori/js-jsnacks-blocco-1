// definisco array invitati
let guests = ['Jhonny Deep', 'Leo Di Caprio', 'Nicole Kidman'];

//setto var di controllo 
let check_guests = false; 

// recuper il mpulsante dal dom e gli dico di restare in attesa dell'evento click
document.getElementById('check-guest').addEventListener('click', function() {
    //recupero il valore inserito nell'input in html
    let name = document.getElementById('name').value; 

    //faccio ciclo array 
    for(let i = 0; i < guests.length; i++) {
        // coontrollo val iterato con val inserito dall'utente portando tutto il lower case
        if (guests[i].toLowerCase() === name.toLowerCase()){
            check_guests = true;
        }
    }

    //verifico valore var di controllo
    if (check_guests){
        console.log(`Benvenuto ${name}, si accomodi`);
    }
    else{
        console.log('Chi siete?');
    }
});


