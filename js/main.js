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

// Actualizar la lista de pacientes en la página
function actualizarListaPacientes() {
    const listaPacientes = document.getElementById("listaPacientes");
    listaPacientes.innerHTML = "";

    // Obtener la lista de pacientes almacenados en localStorage
    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    // Recorrer la lista y mostrar los pacientes en la página
    pacientes.forEach(function(paciente) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `
            ID: HC${paciente.id},
            Nombre: ${paciente.nombre},
            Apellido: ${paciente.apellido}, 
            Documento: ${paciente.documento},
            Email: ${paciente.email}
             <button class="btn btn-danger btn-sm float-right" onclick="eliminarPaciente(${paciente.id})">Eliminar</button>
        `;
        listaPacientes.appendChild(li);
    });
}

   
   function eliminarPaciente(id) {// Función para eliminar un paciente
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    pacientes = pacientes.filter(paciente => paciente.id !== id);
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // Actualizar localStorage
    actualizarListaPacientes();
}

actualizarListaPacientes();
