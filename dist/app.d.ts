interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
}
declare const conducirBatimovil: (auto: Auto) => void;
declare const batimovil: Auto;
interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
}
declare const guason: Guason;
declare const reir: (guason: Guason) => void;
interface CiudadGotica {
    (ciudadanos: string[]): number;
}
declare const ciudadGotica: CiudadGotica;
interface PersonaInterface {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
}
declare class Persona implements PersonaInterface {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    constructor(nombre: string, edad: number, sexo: string, estadoCivil: string);
    imprimirBio(): void;
}
//# sourceMappingURL=app.d.ts.map