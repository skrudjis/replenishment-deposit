'use strict';
function calculateInterest(amount, period ,percent) {

    if (period >= 3){
        percent = 2;
    }
    if (period >= 6){
        percent = 2.2;
    }
    if (period >= 9){
        percent = 2.3;
    }
    if (period >= 12){
        percent = 2.6;
    }
    if (period >= 18){
        percent = 2.7;
    }
    const totalInput = (amount*(1 + percent/100 * 365/12/365 )**period).toFixed(0);
    const profitInput = (totalInput - amount).toFixed(0);

return {
    percent,
    totalInput,
    profitInput
};

}

 function listenerSubmit(evt) {
    evt.preventDefault();

    const amountInputEl = document.getElementById('amount-input');
    const amountInput = Number(amountInputEl.value);

    const periodInputEl =document.getElementById('period-input');
    const periodInput = Number(periodInputEl.value);


    const result = calculateInterest(amountInput, periodInput);
    const totalEl = document.getElementById('total');
    totalEl.textContent =`${result.totalInput}`;
    const profitEl =document.getElementById('profit');
    profitEl.textContent = `${result.profitInput}`;
    const percentEl = document.getElementById('percent');
    percentEl.textContent = `${result.percent}`;

}
const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', listenerSubmit);