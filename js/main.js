// Declaracion de la clase Paciente
class paciente {
    constructor(nombre, apellido, documento, email, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.email = email;
        this.id = id;
    }
};

// Definir un Array pacientes

const pacientes = [
    {id:1, nombre:"Eduardo", apellido:"Regali", documento:"33721152", email:"ejregali@gmail.com"},
    {id:2, nombre:"Melina", apellido:"Machado", documento:"34460033", email:"mmachadobodiogmail.com"}
];
// console.log(pacientes);

const guardarLocalStorage = (clave, valor) => { // Declarar funcion de guardar LS pasando JSON
    localStorage.setItem(clave, JSON.stringify(valor));
}

const cargarLocalStorage = (clave) => { // // Declarar funcion de leer y cargar LS
    return JSON.parse(localStorage.getItem(clave));
}

guardarLocalStorage("listaDePacientes", pacientes); // Funcion para guardar en localStorage

const archivoPacientes = cargarLocalStorage("listaDePacientes") // Ejecuto cargarLocalStorage y guardo resultado en constante
const archivo = []; //Crear nuevo array

for (const itemPaciente of archivoPacientes) {
    let objetoPaciente = new paciente(itemPaciente) // Crea una nueva instancia de la clase paciente a partir de un objeto
    pacientes.push(objetoPaciente); // Guardat en el array archivo, un objeto a partir de una clase
}