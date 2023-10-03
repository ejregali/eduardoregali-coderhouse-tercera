// Declaracion de la clase Paciente
   class Paciente {
    constructor(nombre, apellido, documento, email, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.email = email;
        this.id = id;
    }
}

function generarID() { // Numero ID aleatorio
    return Math.floor(10000 + Math.random() * 90000);
}


// Evento de envío del formulario
document.getElementById("pacienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const documento = document.getElementById("documento").value;
    const email = document.getElementById("email").value;
    const id = generarID();

    const paciente = new Paciente(nombre, apellido, documento, email, id);

    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || []; // Leer y cargar LS

    pacientes.push(paciente);   //  Nuevo paciente al array

    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // Guardar LS pasando JSON
     
    document.getElementById("pacienteForm").reset(); // Limpiar el formulario

    actualizarListaPacientes();     // Actualizar render en la lista de pacientes

 });

function actualizarListaPacientes() { // Actualizar la lista de pacientes en la página
    const listaPacientes = document.getElementById("listaPacientes");
    listaPacientes.innerHTML = "";

    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || []; // Llamar a la lista de pacientes almacenados en localStorage

    pacientes.forEach(function(paciente) {    // forEach de la lista y mostrar los pacientes
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `ID: ${paciente.id}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Documento: ${paciente.documento}, Email: ${paciente.email}`;
        listaPacientes.appendChild(li);
    });
}

actualizarListaPacientes();
