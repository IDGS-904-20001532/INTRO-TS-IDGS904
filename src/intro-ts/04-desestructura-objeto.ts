interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:2345,
    nombre:'Mario',
    edad:23,
    correo:"mario@gmail.com",
    grupo:{
        grupo:'idgs904',
        year:2023
    }
}

const{matricula1,grupo:grupo1}=alumno2;
const{grupo}=grupo1

console.log(`La Matricula es: ${alumno2.matricula1}`);
console.log(`El Nombre es: ${alumno2.nombre}`);
console.log(`El Grupo es: ${alumno2.grupo}`);
console.log(`El Año del: ${alumno2.grupo.year}`);

//Desistructuracion de arreglos
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)

const[a,b]=gps;
console.log(`Grupo 1: ${a}`);