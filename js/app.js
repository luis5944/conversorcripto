const cotizador = new API(
  "GETYOUROWNKEY"
);

const ui = new Interfaz();

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //leer moneda
  const monedaSelec = document.querySelector("#moneda").value;
  const criptoSelec = document.querySelector("#criptomoneda").value;
  const cantidad = document.getElementById("cantidad").value;

  if (monedaSelec === "" || criptoSelec === "" || cantidad === "") {
    //Fallo
    ui.mostrarMensaje(
      "Tienes que seleccionar los 3 campos.",
      "alert bg-danger text-center"
    );
  } else {
    cotizador.obtenerValores(monedaSelec, criptoSelec).then((data) => {
      ui.mostrarResultado(
        data.resultado.RAW,
        monedaSelec,
        criptoSelec,
        parseInt(cantidad)
      );
    });
  }
});
