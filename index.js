// Constantes que necesitaremos
const formulario = document.getElementById("Formulario");
const tabla = document.getElementById("Tabla");
const CuerpoTabla = document.createElement("tbody");

const Datos = new Array();

// Agregamos el evento submit al formulario
formulario.addEventListener("submit", Data);

// Funciones
function Data(e) {
  e.preventDefault();

  const nombre = document.getElementById("Nombre").value;
  const apellido = document.getElementById("Apellido").value;
  const telefono = document.getElementById("Telefono").value;

  // Agregamos los datos a un objeto
  let Data = {
    Nombre: nombre,
    Apellido: apellido,
    Telefono: telefono,
  };

  // Enviamos
  Datos.push(Data);

  // Actualizamos la tabla
  ActualizarTabla();

  // Limpiamos el formulario
  formulario.reset();
}

function ActualizarTabla() {
  // Limpiamos la tabla
  CuerpoTabla.innerHTML = "";

  // Recorremos el array y generamos las filas
  Datos.forEach((element, indice) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${element.Nombre}</td>
      <td>${element.Apellido}</td>
      <td>${element.Telefono}</td>
      <td><button onclick="Eliminar(${indice})">Eliminar</button></td>
    `;
    CuerpoTabla.appendChild(fila);
  });

  // Agregamos el cuerpo a la tabla
  tabla.appendChild(CuerpoTabla);
}

function Eliminar(indice) {
  // Eliminamos el elemento del array según el índice
  Datos.splice(indice, 1);

  // Actualizamos la tabla
  ActualizarTabla();
}
