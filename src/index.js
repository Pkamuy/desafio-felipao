let nomeHeroi = "Pedro"
let xpHeroi = 300;

switch (true){
    case xpHeroi <= 1000 :
        console.log ("Ferro")
        break
    
    case xpHeroi <= 2000 :
        console.log ("bronze")
        break

    case xpHeroi <= 5000 :
        console.log ("Prata")
        break

    case xpHeroi <= 7000 :
        console.log ("Ouro")
        break

    case xpHeroi <= 8000 :
        console.log ("Platina")
        break
    
    case xpHeroi <= 9000 :
        console.log ("Ascendente")
        break

    case xpHeroi <= 10000 :
        console.log ("imortal")
        break

        default: 
        console.log("Radiante");
}
 console.log ("O herói de nome "+ nomeHeroi +  "está no nível de" + xpHeroi)