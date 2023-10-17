class Paciente {
    constructor(nombre, apellido, documento, email, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.email = email;
        this.id = id;
        this.horaIngreso = new Date(); // Hora de ingreso como objeto Date en uso horario local
    }
}

function generarID() {
    return Math.floor(10000 + Math.random() * 90000);
}

function calcularTiempoTranscurrido(horaIngreso, horaActual) {
const tiempoTranscurridoMs = horaActual - horaIngreso;
const segundos = Math.floor(tiempoTranscurridoMs / 1000);
const minutos = Math.floor(segundos / 60);
const horas = Math.floor(minutos / 60);
const dias = Math.floor(horas / 24);

if (dias > 0) {
return `${dias} días`;
} else if (horas > 0) {
return `${horas} horas`;
} else if (minutos > 0) {
return `${minutos} minutos`;
} else {
return `${segundos} segundos`;
}
}

function formatTimeInLocalTimezone(hora) {
    if (hora instanceof Date) {
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const offsetMinutes = hora.getTimezoneOffset();
        const offsetHours = offsetMinutes / 60;
        hora.setHours(hora.getHours() - offsetHours);
        return hora.toLocaleString(undefined, options);
    } else {
        return "Fecha no válida";
    }
}


document.getElementById("pacienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const documento = document.getElementById("documento").value;
    const email = document.getElementById("email").value;
    const id = generarID();

    const paciente = new Paciente(nombre, apellido, documento, email, id);

    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    pacientes.push(paciente);

    localStorage.setItem("pacientes", JSON.stringify(pacientes));

    document.getElementById("pacienteForm").reset();

    actualizarListaPacientes();
});

function actualizarListaPacientes() {
    const listaPacientes = document.getElementById("listaPacientes");
    listaPacientes.innerHTML = "";

    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    pacientes.forEach(function(paciente) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        // Convertir el campo horaIngreso de paciente a un objeto Date y ajustar al uso horario local
        const horaIngreso = new Date(paciente.horaIngreso);
        const horaActual = new Date();
        const tiempoTranscurrido = calcularTiempoTranscurrido(horaIngreso, horaActual);

        li.innerHTML = `
            <table>
                <tr>
                    <td>Historia Clinica:</td>
                    <td>HC${paciente.id}</td>
                </tr>
                <tr>
                    <td>Nombre:</td>
                    <td>${paciente.nombre}</td>
                </tr>
                <tr>
                    <td>Apellido:</td>
                    <td>${paciente.apellido}</td>
                </tr>
                <tr>
                    <td>Documento:</td>
                    <td>${paciente.documento}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>${paciente.email}</td>
                </tr>
               
                <tr>
                    <td>Tiempo Transcurrido:</td>
                    <td>${tiempoTranscurrido}</td>
                </tr>
            </table>

            <button class="btn btn-danger btn-sm float-right" onclick="eliminarPaciente(${paciente.id})">Eliminar</button>
        `;
        listaPacientes.appendChild(li);
    });
}

function eliminarPaciente(id) {
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    pacientes = pacientes.filter(paciente => paciente.id !== id);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    actualizarListaPacientes();
}

actualizarListaPacientes();
