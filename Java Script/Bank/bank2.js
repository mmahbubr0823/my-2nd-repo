document.getElementById('depo-btn').addEventListener('click', function () {
    // deposit field section

    const depoInput = document.getElementById('depo-input');
    const depoAmount = depoInput.value;
    const depoAmountTotal = parseFloat(depoAmount) - (parseFloat(depoAmount) * 30) / 100;

    // deposit balance  section

    const depoField = document.getElementById('depo-total');
    const depoBalance = depoField.innerText;
    const depoBalTotal = parseFloat(depoBalance);
    const depoTotalBalance = depoBalTotal + depoAmountTotal;
    depoField.innerText = depoTotalBalance;

    //    balance section

    const balance = document.getElementById('balance-total');
    const balanceString = balance.innerText;
    const balanceTotal = parseFloat(balanceString);
    const newBalance = balanceTotal + depoAmountTotal;
    balance.innerText = newBalance;
    depoInput.value = '';



})

//    withdraw part!!

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withInput = document.getElementById('with-input');
    const withBalance = withInput.value;
    const withTotal = parseFloat(withBalance);


    const withField = document.getElementById('withdraw-total');
    const withString = withField.innerText;
    const withFieldTotal = parseFloat(withString);
    const newWith = withFieldTotal + withTotal;
    withField.innerText = newWith;

    const balanceField = document.getElementById('balance-total');
    const balanceString = balanceField.innerText;
    const balanceFieldTotal = parseFloat(balanceString);
    const currentBalance = balanceFieldTotal - withTotal;
    balanceField.innerText = currentBalance;
    withInput.value = '';
})
function generatePin(){ return Math.floor(Math.random()*90000) + 10000; }