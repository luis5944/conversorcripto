class Interfaz {
  constructor() {
    this.init();
  }

  init() {
    this.construirSelectCripto();
  }

  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");

    //Añadimos clases css
    div.className = clases;
    //Añadimos el texto
    div.textContent = mensaje;

    //Añadimos al div el mensaje que acabamos de crear
    const divMensaje = document.querySelector(".mensajes");
    divMensaje.appendChild(div);

    setTimeout(() => {
      //borramos el mensaje que acabamos de crear a los 2 segundos
      div.remove();
    }, 2000);
  }

  mostrarResultado(resultado, moneda, crypto, cantidad) {
    const divResultado = document.querySelector("#resultado");
    divResultado.innerHTML = "";
    console.log(resultado[crypto]);
    const datosMoneda = resultado[crypto][moneda];

    //Precio
    const precio = datosMoneda.PRICE.toFixed(2);
    const variacionDiaria = datosMoneda.CHANGEPCTDAY.toFixed(3);

    //Template

    let templateHTML = `
    <div class = "card bg-dark">
        <div class="card-body text-light">
            <h2 class="card-title">Resultado:</h2>
                <p>Precio de ${cantidad} ${crypto} a 
                ${datosMoneda.TOSYMBOL} es de: </p>
                <div class ="card bg-info m-0">
                ${precio * cantidad} ${datosMoneda.TOSYMBOL}
                <p>(Precio por unidad: ${precio})</p>
                Variación en el último día: ${variacionDiaria} %
                <p>Última actualización: ${new Date(
                  datosMoneda.LASTUPDATE * 1000
                ).toLocaleDateString("es-ES")}</p>
                </div>
                

        </div>
    </div>
    `;

    this.mostrarMensaje("Cargando datos...", "alert bg-danger text-center");
    setTimeout(() => {
      //Insertar
      divResultado.innerHTML = templateHTML;
    }, 2000);
  }

  construirSelectCripto() {
    cotizador
      .obtenerCripto()
      .then((monedas) => {
        //Seleccionamos el select(combo)
        const select = document.getElementById("criptomoneda");
        //pasamos por todo el data
        for (const [key, value] of Object.entries(monedas.monedas.Data)) {
          //Creamos una opcion y le añadimos el valor y el texto
          const opcion = document.createElement("option");
          opcion.value = value.Symbol;
          opcion.textContent = value.CoinName;

          //Lo agregamos al combo
          select.appendChild(opcion);
        }
      })
      .catch((err) => {
        this.mostrarMensaje("Error");
      });
  }
}
