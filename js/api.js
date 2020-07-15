class API {
  constructor(apikey) {
    this.apikey = apikey;
  }

  async obtenerCripto() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    const ulrObtenerCripto = await fetch(url);

    const monedas = await ulrObtenerCripto.json();

    return { monedas };
  }

  async obtenerValores(moneda, criptoMoneda) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&${this.apikey}`;

    //Consultar en rest API

    const urlConvertir = await fetch(url);

    const resultado = await urlConvertir.json();

    return {
      resultado,
    };
  }
}
