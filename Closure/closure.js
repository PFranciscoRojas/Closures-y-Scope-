//Closure recuerda el ambito en el cual ha sido creado
//combina una funcion y al ambioto lexito donde fue establecidas las variables

const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}
moneyBox(5)
moneyBox(10)

const moneyBox2 = () =>{
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox2()
myMoneyBox(5)
myMoneyBox(10)