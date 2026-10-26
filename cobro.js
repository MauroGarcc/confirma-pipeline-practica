// Practica academica. Datos simulados. No contiene llaves ni secretos.

// Comision en centavos: monto (centavos) por tasa en puntos base (50 = 0,5 %).
// Se trabaja en enteros para evitar errores de redondeo.
function comisionCentavos(montoCentavos, tasaPuntosBase) {
  return Math.round((montoCentavos * tasaPuntosBase) / 10000);
}

// Registro de cobros en memoria: la misma llave devuelve el mismo cobro.
function crearRegistro() {
  const porLlave = new Map();
  return function registrar(llave, montoCentavos) {
    if (!porLlave.has(llave)) {
      porLlave.set(llave, { id: porLlave.size + 1, montoCentavos });
    }
    return porLlave.get(llave);
  };
}

module.exports = { comisionCentavos, crearRegistro };
