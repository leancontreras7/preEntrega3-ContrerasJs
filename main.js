let nombre = prompt("Ingresa tu nombre:")
let edad = prompt("Ingresa tu edad:")
let mail = prompt("Ingresa tu mail:")


function opciones() {
    let opcion
    
    do{
        opcion = prompt("Seleccionar Servicio: 1) Nutricion 2) Corte 3) Color 4) Alisado")
    }while(opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4")
  
    
    switch (opcion) {
      case "1":
        alert("Has elegido Nutricion")
        break
      case "2":
        alert("Has elegido Corte")
        break
      case "3":
        alert("Has elegido Color")
        break
      case "4":
        alert("Has elegido Alisado")
        break
      default:
        alert("Opción inválida")
        break
    }
}

opciones()

continuar = confirm("queres sacar un turno para el servicio elegido?")
if(continuar == true) {
    function opcionesTurnos() {
        let opcionesTurnos
        
        do{
            opcionesTurnos = prompt("Elegir Dia : 1) Lunes 2) Martes 3) Miercoles 4) Jueves 5) Viernes")
        }while(opcionesTurnos != "1" && opcionesTurnos != "2" && opcionesTurnos != "3" && opcionesTurnos != "4" && opcionesTurnos != "5")
      
        
        switch (opcionesTurnos) {
            case "1":
                alert("tu turno fue agendado para el dia Lunes")
                break
            case "2":
                alert("tu turno fue agendado para el dia Martes")
                break
            case "3":
                alert("tu turno fue agendado para el dia Miercoles")
                break
            case "4":
                alert("tu turno fue agendado para el dia Jueves")
                break
            case "5":
                alert("tu turno fue agendado para el dia Viernes")
                break
            default:
                alert("Opción inválida")
                break
            
        }
    }


opcionesTurnos()

}else if(continuar == false){
    alert("gracias por visitar nuestra pagina, vuelva pronto! ")
}

let servicios = [
  { nombre: "Nutricion", duracion: 90, precio: 3000 },
  { nombre: "Corte", duracion: 30, precio: 1000 },
  { nombre: "Color", duracion: 120, precio: 3500 },
  { nombre: "Alisado", duracion: 60, precio: 2000 }
];

function buscarServicio(servicios, nombre) {
  return servicios.find(servicio => servicio.nombre === nombre);
}

function filtrarPorDuracion(servicios, duracionMinima, duracionMaxima) {
  return servicios.filter(servicio => servicio.duracion >= duracionMinima && servicio.duracion <= duracionMaxima);
}

function filtrarPorPrecio(servicios, precioMaximo) {
  return servicios.filter(servicio => servicio.precio <= precioMaximo);
}


const reservasBtn = document.getElementById('reservas-btn');

reservasBtn.addEventListener('click', reservas);

function reservas() {
 
  const nombreInput = document.getElementById('nombre').value;
  const servicioInput = document.getElementById('servicio').value;
  const fechaInput = document.getElementById('fecha').value;

  
  const reserva = {
    nombre: nombreInput,
    servicio: servicioInput,
    fecha: fechaInput
  };

 
  const reservasStorage = localStorage.getItem('reservas');
  let reservas = [];
  if (reservasStorage) {
    reservas = JSON.parse(reservasStorage);
  }

  reservas.push(reserva);

  localStorage.setItem('reservas', JSON.stringify(reservas));

  
  actualizarListaReservas(reservas);
}


function actualizarListaReservas(reservas) {
  const listaReservas = document.getElementById('lista-reservas');

  
  listaReservas.innerHTML = '';

  
  reservas.forEach(function(reserva) {
    const itemReserva = document.createElement('li');
    itemReserva.textContent = `Nombre: ${reserva.nombre}, Servicio: ${reserva.servicio}, Fecha: ${reserva.fecha}`;
    listaReservas.appendChild(itemReserva);
  });
}


window.addEventListener('load', function() {
  const reservasStorage = localStorage.getItem('reservas');
  let reservas = [];
  if (reservasStorage) {
    reservas = JSON.parse(reservasStorage);
  }
  actualizarListaReservas(reservas);
});

