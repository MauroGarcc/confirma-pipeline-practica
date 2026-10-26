const test = require("node:test");
const assert = require("node:assert");
const { comisionCentavos, crearRegistro } = require("./cobro.js");

test("una comision de 0,5 % sobre 35 USD da 0,18 USD", () => {
  assert.strictEqual(comisionCentavos(3500, 50), 18);
});

test("la misma llave devuelve el mismo cobro (no se cobra dos veces)", () => {
  const registrar = crearRegistro();
  const primero = registrar("llave-1", 3500);
  const reintento = registrar("llave-1", 3500);
  assert.strictEqual(primero.id, reintento.id);
});
