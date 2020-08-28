// Escope es el alcance de las variables 
var hello = 'Hello' 
let world = 'World' 
let world = "world2" // let no permite reasignar una variable de esta forma
const helloWorld=  'Hello WOrld'

const anotherFunction = ()=>
{
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

// puedo acceder a una variable global incluso dentro de una funcion
// MALA PRACTICA -- Ojo esto funciona sin declarar nada antes de la variable
const helloWorld = ()=>{
      globalVar = 'Im global'
}
helloWorld()
console.log(globalVar)

const anotherFunction1 = () =>{
    var localVar = globarVar = 'Im global'
}
anotherFunction1()
console.log(globarVar)