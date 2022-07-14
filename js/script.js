 function saludar () {
     let nombre = prompt ("Por favor ingrese su nombre ")
     alert("Bienvenido a devientos"+" "+nombre+" "+".A continuación tendrá nuestro catálogo de instrumentos")   }

 saludar ()




class Producto {
    constructor (id, nombre, tipo, registro, precio, descuento,stock, reviews, marca ){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.registro = registro;
        this.precio = parseFloat(precio);
        this.descuento = parseFloat(descuento);
        this.stock = parseFloat(stock);
        this.stock = stock
        this.marca = marca
    }

}





//Creacion de los articulos de la pagina



const eastar = new Producto (1,"Eastar","alto","bart",100,10,30,4,"vw")
const pepito = new Producto (2,"pepito","alto","lisa",200,10,40,4,"peugote")
const larala = new Producto (3,"larala","alto","homero",300,20,10,4,"chevrole")
const esponja = new Producto (4,"esponja","alto","magui",500,40,33,4,"fiat")


const saxoAlto = [eastar,pepito,larala,esponja]

//mostramos en consola el array formado por los objetos y seleccionamos el que esta en el indice numero 3 
console.log (saxoAlto)
console.log (saxoAlto [3])

function pedido () {
  let pedido = parseFloat(prompt("Seleccione el numero de saxo que desea comprar y se lo mostraremos. 1)easter 2)pepito 3)larala 4)esponja" ))
  switch (pedido) {
    case 1: 
    alert (eastar);
    break;
    case 2:
      alert (pepito);
      break;
    case 3: 
    alert (larala);
    break;
    case 4 :
        alert (esponja)
    default: 
    alert ("No se lo que me pediste pero no lo tengo");
    break;

  }
}

pedido()

/*Vamos a probar algunos métodos que pueden ser de utilidad para la pagina
Primero nos consultan por el saxo larala y verificamos su existencia en la categoría saxoAlto
Segundo voy a quitar el último elemento del array y posteriormente lo voy a volver a ingresar en su mismo lugar*/

console.log (saxoAlto.includes(larala))
saxoAlto.pop()
console.log (saxoAlto)
saxoAlto.push (esponja)
console.log (saxoAlto)


//Ahora intentaremos recorrer nuestro array de saxoAlto con la sentencia for... of. *******NECESITO AYUDA EN ESTE CICLO**************

for (const eastar of saxoAlto){
    console.log (eastar.id)
    console.log (eastar.marca)
    console.log (eastar.precio)
}

// Recorremos el array con un forEach
saxoAlto.forEach(element => {
    console.log (element)

});

//Ahora buscamos si "Eastar" está dentro de nuestro array
const resultado = saxoAlto.find((element) => element.nombre === "Eastar")
console.log (resultado)


//Al darnos cuenta que el nombre es algo muy solicitado por los usuarios, creamos un array con map con sola esta categoría


const nombres = saxoAlto.map ((element) => element.nombre)
console.log (nombres)

// Filtraremos los cursos más baratos para generar una sección con nuestros productos mas accesibles


// const baratos = saxoAlto.filter (nombre => nombre.precio < 250)
// console.log (baratos)




// A continuación vamos a actualizar la lista de precios con map y subirlos un 25%. no me reconoce los signos de operacion *******Necesito ayuda en este map********
/*
const actualizado = saxoAlto.map ((element) => {
    return {
    nombre: element.nombre,
    id: element.id
    precio: element.precio * 1.25
    }
})

console.log (actualizado)

*/

/*
 Ahora creamos un carrito como si todos los elementos fuesen seleccionados para su compra.
 Aca se buggea la pagina ***********TAMPOCO SALE REDUCE********************

const precioFinal = saxoAlto.reduce ((acumulador,element) => acumulador + element.precio, 0)
console.log (precioFinal)
*/
//aca si puedo identificar a los objetos por su indice y busco el elemento que este en el numero 3



// const saxoTenor = [];
// saxoTenor.push (new Producto (6,"ab","asd","ald",110,12,34,1,"pepito"))
// saxoTenor.push (new Producto (7,"cd","gfdh","qwer",140,10,31,2,"gasdw"))
// saxoTenor.push (new Producto (8,"ef","laksdlask","flas",180,11,20,3,"Qwe"))
// saxoTenor.push (new Producto (9,"gh","fasd","bqwe",120,15,40,4,"Gaso"))
// saxoTenor.push (new Producto (10,"ij","bqasd","pasd",115,11,10,5,"das"))

// console.log (saxoTenor)


// const saxoBaritono = [];
// saxoBaritono.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// saxoBaritono.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// saxoBaritono.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// saxoBaritono.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// saxoBaritono.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))

// console.log (saxoBaritono)

// const saxo = [saxoAlto,saxoTenor,saxoBaritono];


// console.log (saxo)


// const clarinete = [];
// clarinete.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// clarinete.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// clarinete.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// clarinete.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// clarinete.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))

// console.log (clarinete)

// const trombon = [];
// trombon.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trombon.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trombon.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trombon.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trombon.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))

// console.log (trombon)


// const trompeta = [];
// trompeta.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trompeta.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trompeta.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trompeta.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))
// trompeta.push (new Producto (2,"pepito","pepito","pepito",100,10,30,4,"pepito"))

// console.log (trompeta)

// /*metodos a utilizar. Queda pendiente para la proxima entrega buscar la informacion real de los atributos.
//  //A modo de ejemplo agarre solo un array y utilicé algunos metodos para agregar funcionabilidad a la pagina*/


//  // Los metodos de array


// console.log (saxoAlto)


//Aca vamos a simular que dentro del array del saxo alto queremos buscar el que se llame patricio


// const buscarPatricio = saxoAlto.find(nombre => saxoAlto.nombre == "patricio")
// console.log (buscarPatricio)
// const buscarId2 = saxoAlto.find (id => saxoAlto.id == 2 )
// console.log (busc)


// Acá utilicé el metodo concat para generar un nuevo array con la concatenación de los tres tipos de saxo
// const tambiensaxo = saxoAlto.concat(saxoBaritono,saxoTenor)
// console.log (tambiensaxo)

/*Aca intenté acceder al elemento que esta en el indice numero 3.
Pero el resultado undefined. Sin embargo cuando ejecutamos el console.log (saxoAlto [3])
si pudimos acceder a ese elemento*/

console.log (saxoAlto)
console.log (saxoAlto.indexOf(3))



// function catalogo () {

//     alert (saxo)
//    alert (trombon)
//     alert (trompeta)
//   alert (clarinete)
//  }
//  catalogo()

saxoAlto.some(saxoAlto => saxoAlto.id ==2)

/*for (const saxoAlto of saxoAlto) {
    console.log (saxoAlto.id)
    console.log (saxoAlto.precio)
}
*/

//funcion de orden superior para encontrar al precio mas bajo

// Creación del HTML dinámico

const nav = document.getElementsByClassName("nav")
const main = document.getElementsByClassName("main")

console.log (nav)
console.log (main)

main.innerText = "Hola amigos"
main.innerHTML = "<h3>Wasaaaa</h3>"

console.log (main)

