(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  const fuerzaFlash: number = 5;
  (() => {
    enum fuerzaFlash {
      Flash = 5,
    }
  })();

  const fuerzaSuperman: number = 100;
  (() => {
    enum fuerzaSuperman {
      superman = 100,
    }
  })();

  const fuerzaBatman: number = 1;
  (() => {
    enum fuerzaBatman {
      batman = 1,
    }
  })();

  const fuerzaAcuaman: number = 0;
  (() => {
    enum fuerzaAcuaman {
      Acuaman = 0,
    }
  })();

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = 100;
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
