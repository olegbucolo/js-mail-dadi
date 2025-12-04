let listaInvitati = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com']

let emailUser = prompt('entra la tua email');
console.log(`l'email inserita dall'utete e': `, emailUser)

let emailCorrisponde = false;
for (let email of listaInvitati){
    console.log(`confronto dell'email inserita (${emailUser}) con l'email nell'array all'index [${listaInvitati.indexOf(email)}]`)
    if(email === emailUser){
        emailCorrisponde = true
        console.log('email trovata, ciclo interrotto')
        break
    }else{
        console.log(`email all'index [${listaInvitati.indexOf(email)}] non corrisponde, provo quella dopo`)
    }
}

if(!emailCorrisponde){
    console.log('ESITO: devi scavalcare')
}else{
        console.log('ESITO: sei invitato')

}