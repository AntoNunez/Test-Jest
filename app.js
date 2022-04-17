const sum = (a,b) => {
    return a + b
};

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

console.log(sum(73))



module.exports={sum,fromEuroToDollar};
