type car = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare const batimovil: car;
declare const bumblebee: car;
type villanos = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
};
declare const villanos: villanos[];
type Charles = {
    poder: string;
    estatura: number;
};
declare const charles: Charles;
type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare const apocalipsis: Apocalipsis;
declare let mystique: Charles | Apocalipsis;
//# sourceMappingURL=app.d.ts.map