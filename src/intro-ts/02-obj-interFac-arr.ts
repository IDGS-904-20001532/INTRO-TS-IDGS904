//Es una clase la cual contiene las propiedades con el tipo de datos que se va ha utilizar
interface Alumnos{
    matricula?:  number;
    nombre?:     string;
    edad?:       number;
    email?:      string;
}

//Declaracion de un objeto
const alumnos:Alumnos={
    matricula:20001532,
    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com'
}

let vector1:Array<number>=[9,8,7,6,5];
vector1.push(9);

for(let elemento of vector1){
    console.log(elemento)
}

console.log(alumnos)