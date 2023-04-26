/* RICHIESTA
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */



// Dichiaro le mie VARIABILI
let userName, userSurname, userColor, messaggio;

// Chiedo all'utente il proprio NOME
userName = prompt("Come ti chiami?");
userName = userName.replace(/\s+/g, '');
console.log(userName);

// Chiedo all'utente il proprio COGNOME
userSurname = prompt("Qual è il tuo cognome?");
userSurname = userSurname.replace(/\s+/g, '');
console.log(userSurname);


// Chiedo all'utente il proprio COLORE PREFERITO?
userColor = prompt("E il tuo colore preferito?");
console.log(userColor);

// Creo MESSAGGIO per l'utente
messaggio = `La tua password potrebbe essere ${userName+userSurname+userColor+21}`;
console.log(messaggio);

// Mostro messaggio a SCHERMO
document.getElementById("mio_id").innerHTML = messaggio;