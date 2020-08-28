const helloWorld = () =>{
    const hello = 'Hello WOrld'
    console.log(hello)
}
helloWorld()

var scope = "Im GLobal"

const functionScope =()=>{
    var scope = 'Im a local'
    const func = ()=>{
        return scope;
    }
    console.log(scope)
}

functionScope()
console.log(scope)
