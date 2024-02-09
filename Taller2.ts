/* Declaren variables utilizando diferentes tipos de datos: número, cadena, booleano,
arreglo, objeto, etc. */

let nombre: string = "Mario";               //variable cadena
let mayorEdad: boolean = true;              //variable boolean
let edad: number = 36;                      //variable number
let arrayTaller: number[] = [1,2,3,4]       //variable arreglo

/* Utilicen tipos de literales para limitar los valores de una variable. */
/* Creen funciones básicas con diferentes tipos de parámetros y tipos de retorno. */

const test= (test1:string="cosas", test2: string="mas cosas"):void => {
    console.log(`esto es una prueba de: ${test1}`);                          //creé una funcion que no tiene return(void)
}

test();

/* Resuelvan un problema utilizando estructuras condicionales (if, else if, else). */
/* Creen funciones que utilicen parámetros opcionales y con valores predeterminados. */

const test2= (edad:number = 18, nombre?:string):string => {
    if(edad >= 18 && edad <= 60){
        return `eres mayor de edad ${nombre}`;
    }else if (edad >= 70){
        return `Busque Ancianato urgente ${nombre}`;
    }else{
        return `Madure pa q se lo coman ${nombre}`;
    }
}

console.log (test2(70,"Mario"));