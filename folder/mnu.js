var optPlatillo="";
var optBebbida="";
var cantidadPlat =0;
var cantidadBeb=0;
var Totalcomida=0;
var tot=0;
var tott=0;

optPlatillo = prompt("Eliga sus alimentos \nPlatillo a. Nachos(30 pesos) \n Platillo b. Pizza (120 pesos) \n Platillo C. Tacos (10 pesos)")
cantidadPlat=prompt("Cuantas ordenes?")
cantidadPlat=parseInt(cantidadPlat);
optBebbida = prompt("Eliga sus bebidas \nBebida a.Agua natural(15 pesos) \n Bebida b.Sodas (30 pesos) \n Bebida c. Cerveza(45 pesos)")
cantidadBeb=prompt("Cuantas bebidas")
cantidadBeb=parseInt(cantidadBeb);
switch (optPlatillo){
    
case "a":
    tot=Totalcomida + 30*cantidadPlat;
    break;

    case"b":
    tot= Totalcomida + 120*cantidadPlat;
    break;

    case"c":
    tot= Totalcomida + 10*cantidadPlat;
    break;
    default:
            alert("seleccionaste una opción incorrecta o que no se encuentra en el menú")
    
}

switch (optBebbida){
    case "a":
        tott=tot + 15*cantidadBeb;
        break;
    
        case"b":
       tott=tot + 30*cantidadBeb;
        break;
    
        case"c":
        tott=tot + 45*cantidadBeb;
        break;
        
        default:
            alert("seleccionaste una opción incorrecta o que no se encuentra en el menú")
    
    }
console.log(Totalcomida);
alert("tiene que pagar " + (tott));


