//Bienvenida al Usuario
let bienvenidaAUsuario = prompt("Hola, ingrese su nombre completo con un maximo de 20 caracteres para acceder a la pagina");
let rangoNombre = bienvenidaAUsuario.slice(0,25);

if(rangoNombre >= bienvenidaAUsuario){
    alert("Bienvenido a Tatto Store: " + rangoNombre);
}else{
    alert("Error: Superaste el maximo de caracteres.");
}


//Consulta de Productos

function consultaProductos(){
    let seleccionProducto = prompt("Ingrese el producto que desea consultar de Maquinas inalambricas, fuentes, agujas, cremas o salir");

    while(seleccionProducto != "salir"){
        switch (seleccionProducto) {
            case "maquinas inalambricas":
                alert("1.Exo: $8.000 | 2.Emily: $10.000 | 3.Monster: $12.500 | 4.thunderlord: $14.000");
            break;
    
            case "fuentes":
                alert("1.Assassin: $18.000 | 2.Klon Aurora $25.000 | 3. Clipcord $15.000");
            break;
    
            case "agujas":
                alert("1.Agujas surtidas x 20u $5.000 | 2.Agujas x 50u $9.000 | 3.Agujas x 100u $12.000");
            break;
    
            case "cremas":
                alert("1.Post tattoo $3.000 | 2.Cleaner $1.500 | 3.Anestesica $5.000");
            break;
    
            default: 
                alert("No a ingresado un numero valido.");
            break;
        }
        seleccionProducto = prompt("Para consultar nuevamente sobre nuestros podructos ingresa Maquinas inalambricas, fuentes, agujas, cremas o salir?");
    }
}
consultaProductos();



function calculadorCuotasSinInteres(){
    let ingresoMontoACalcular = Number(prompt("Ingresa el monto de los productos que deseas saber en cuanto te queda en 6 cuotas sin interes:"));
    return ingresoMontoACalcular / 6;
}
let resultadoMontoCalular = alert(calculadorCuotasSinInteres());


for(let i = 1; i <= 4; i++){
    let informacionCliente = prompt("Ingrese 4 productos que le gustaria que tengamos en cuenta para futuras promociones.");
    console.log(informacionCliente);
}










