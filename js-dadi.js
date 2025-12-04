let numeroUmano = Math.floor(Math.random() * 6) + 1;
console.log("numero umano: ", numeroUmano)

let numeroBot = Math.floor(Math.random() * 6) + 1;
console.log("numero bot: ", numeroBot)

if(numeroUmano > numeroBot){
    console.log(`L'UMANO ha vinto con il numero ${numeroUmano}, i bot sono ancora nostri schiavi`)
}else if(numeroBot > numeroUmano){
    console.log(`I BOT hanno vinto con il numero ${numeroBot}, l'umano e' destinato ad essere HARD ROCCIA`)
}else{
    console.log('i numeri sono uguali, i bot hanno dei diritti for')
}