"use strict";
var enumeracion;
(function (enumeracion) {
    enumeracion[enumeracion["a"] = 10] = "a";
    enumeracion[enumeracion["b"] = 11] = "b";
    enumeracion[enumeracion["c"] = 9] = "c";
    enumeracion[enumeracion["d"] = 10] = "d";
})(enumeracion || (enumeracion = {}));
console.log('Valor de d:', enumeracion.d);
//# sourceMappingURL=check_enum.js.map