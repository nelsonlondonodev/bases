"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    const fuerzaFlash = 5;
    (() => {
        let fuerzaFlash;
        (function (fuerzaFlash) {
            fuerzaFlash[fuerzaFlash["Flash"] = 5] = "Flash";
        })(fuerzaFlash || (fuerzaFlash = {}));
    })();
    const fuerzaSuperman = 100;
    (() => {
        let fuerzaSuperman;
        (function (fuerzaSuperman) {
            fuerzaSuperman[fuerzaSuperman["superman"] = 100] = "superman";
        })(fuerzaSuperman || (fuerzaSuperman = {}));
    })();
    const fuerzaBatman = 1;
    (() => {
        let fuerzaBatman;
        (function (fuerzaBatman) {
            fuerzaBatman[fuerzaBatman["batman"] = 1] = "batman";
        })(fuerzaBatman || (fuerzaBatman = {}));
    })();
    const fuerzaAcuaman = 0;
    (() => {
        let fuerzaAcuaman;
        (function (fuerzaAcuaman) {
            fuerzaAcuaman[fuerzaAcuaman["Acuaman"] = 0] = "Acuaman";
        })(fuerzaAcuaman || (fuerzaAcuaman = {}));
    })();
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = 100;
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map