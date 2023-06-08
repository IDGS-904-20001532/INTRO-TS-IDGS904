//Refiere a la declaracion de la varibale
var num1=23;
let num3=34;
//Definir una variable que no va ha cambiar de valor
const num4=566;

//Typescript: Vienen a cubrir carencias de javascript. 
//Permite tratar de evitar errors de logica al momento 
//de codificar y poder poner el tipado de datos establecidos. 

//Dependiendo los segna. Se genera una traspilacion de pasar el 
//codigo de Typescript a Javascript por medio del navegador 
//y todo se agega en un solo archivo 

//Esta variable es de tipo numerico
let version:number=2.34;
version=3,24;
//Esta variable es de tipo string
let nombre:string='Adrian';
//Esta variable es de tipo booleano
let activo:boolean=false;
//Esta variable tiene dos tipos de datos numerico y string
let matricula:number | string=12345
matricula='abcde';
//Esta variable es un arreglo de tipo numerico el cual esta inicializado
let vector:number[]=[1,4,3];
vector[2]=8;
vector.push(9);
//Recorimos el arreglo de numeros, mostrando en cosola los datos
for(let elemento of vector){
    console.log(elemento)
}

console.log(matricula)
console.log(vector)


