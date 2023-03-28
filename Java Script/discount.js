function ticketPrice(quantityOfTicket){
    const first100Price = 100;
    const second100Price = 90;
    const theRestPrice = 70;
    if(quantityOfTicket <= 100){
        const price1 = quantityOfTicket * first100Price;
        return price1;
    }
    else if(quantityOfTicket <= 200){
        const price2 = 100 * first100Price;
        const price3 = (quantityOfTicket - 100) * second100Price;
        return price2 + price3;
    }
    else{
        const price4 = 100 * first100Price;
        const price5 = 100 * second100Price;
        const price6 = (quantityOfTicket - 200) * theRestPrice;
        return price4 + price5 + price6;
    }
}
const totalPrice = ticketPrice(205);
console.log(totalPrice);