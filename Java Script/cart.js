const shoppingCart = [
    {name: 'shirt', price: 1200, qny: 3},
    {name: 'pant', price: 1600, qny: 5},
    {name: 'watch', price: 1500, qny: 2},
    {name: 'shoe', price: 1000, qny: 3}
]


function totalPrice(shoppingCart){
    let sum = 0;

    for(let i = 0; i< shoppingCart.length; i++){
        const product = shoppingCart[i];
        const totalSum = product.price * product.qny;
        sum += totalSum;

    }
    return sum;
    
}

console.log(totalPrice(shoppingCart));