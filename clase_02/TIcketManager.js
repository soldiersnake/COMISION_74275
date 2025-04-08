class TicketManager {
  #precioBaseDeGanancia = 0.15;
  constructor() {
    this.eventos = [];
    this.idCounter = 1;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.idCounter++,
      nombre,
      lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.eventos.find((e) => e.id === idEvento);
    if (!evento) return console.log("Evento no encontrado");
    if (evento.participantes.includes(idUsuario))
      return console.log("Usuario ya registrado");
    evento.participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const evento = this.eventos.find((e) => e.id === idEvento);
    if (!evento) return console.log("Evento no encontrado");

    const nuevoEvento = {
      ...evento,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      id: this.idCounter++,
      participantes: [],
    };

    this.eventos.push(nuevoEvento);
  }

  getEventos() {
    return this.eventos;
  }
}

// Ejemplo de uso
const tm = new TicketManager();
tm.agregarEvento("Concierto Rock", "Madrid", 100);
tm.agregarUsuario(1, "usuario1");
tm.ponerEventoEnGira(1, "Barcelona", new Date());
console.log("Eventos:", tm.getEventos());
