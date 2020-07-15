const cotizador = new API(
  "52d5f3e0d881b3f43364e8e01dc4406a63b340547490613099b99c0db7899d52"
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
