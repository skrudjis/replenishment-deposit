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


     const amountInputErrorEl = document.getElementById('amount-error');
     const periodInputErrorEl = document.getElementById('period-error');
     const totalEl = document.getElementById('total');
     const profitEl =document.getElementById('profit');
     const percentEl = document.getElementById('percent');

     amountInputErrorEl.textContent = '';
     periodInputErrorEl.textContent = '';
     totalEl.textContent = '';
     profitEl.textContent = '';
     percentEl.textContent = '';

     const amountInputEl = document.getElementById('amount-input');
     const amountInput = Number(amountInputEl.value);
    if (Number.isNaN(amountInput)) {
        amountInputErrorEl.textContent = 'Неверное значение. Введите число, например: 15000';
         return;
    }
    if (amountInput < 15000) {
        amountInputErrorEl.textContent = 'Неверное значение. Минимальная сумма: 15000 ₽';
        return;
    }
    if (amountInput > 50000000) {
        amountInputErrorEl.textContent = 'Неверное значение. Максимальная сумма: 50000000 ₽';
        return;
    }

    const periodInputEl =document.getElementById('period-input');
    const periodInput = Number(periodInputEl.value);
    if (Number.isNaN(periodInput)){
        periodInputErrorEl.textContent = 'Неверное значение. Введите число месяцев, например: 3';
        return;
    }
    if (periodInput < 3){
        periodInputErrorEl.textContent = 'Неверное значение. Минимальный период: 3 месяца';
        return;
    }
    if (periodInput > 18){
        periodInputErrorEl.textContent = 'Неверное значение. Максимальный период: 18 месяцев';
        return;
    }

    const result = calculateInterest(amountInput, periodInput);

    totalEl.textContent =`${result.totalInput}`;
    if (Number.isNaN(amountInput)){
        totalEl.textContent = '';
        return;
    }
    if (amountInput < 15000){
        totalEl.textContent= '';
        return;
    }
    if (amountInput > 50000000){
        totalEl.textContent = '';
        return;
    }

    profitEl.textContent = `${result.profitInput}`;
    if (Number.isNaN(periodInput)){
        profitEl.textContent = '';
        return;
    }
    if (periodInput < 3){
        profitEl.textContent ='';
        return;
    }
    if ((periodInput > 18)){
        profitEl.textContent = '';
        return;
    }

    percentEl.textContent = `${result.percent}`;
    if (Number.isNaN((periodInput && amountInput))){
        percentEl.textContent = '';
        return;
    }
    if (amountInput< 15000 && periodInput < 3){
        percentEl.textContent = '';
        return;
    }
    if (amountInput > 50000000 && periodInput > 18){
        percentEl.textContent = '';
        return;
    }
}
const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', listenerSubmit);









