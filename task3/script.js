function task1(num1, num2) {
    console.log(num1 ** 3 + num2 ** 3);
    let element = document.getElementById('task1Output');
    element.innerHTML = num1 ** 3 + num2 ** 3;
}

function task2() {
    let salary = document.getElementById('task2').value;
    let element = document.getElementById('task2Output');
    if (!isNaN(Number(salary))) {
        let result = `Размер заработной платы за вычетом налогов равен ${salary * 0.87}`
        console.log(result);
        element.innerHTML = result;
    } else {
        console.log('Значение задано неверно');
        element.innerHTML = 'Значение задано неверно';
    }
}

function task3() {
    let num1 = Number(document.getElementById('task3').value);
    let num2 = Number(document.getElementById('task3_1').value);
    let num3 = Number(document.getElementById('task3_2').value);
    let element = document.getElementById('task3Output');
    let max = num1;
    let result = '';
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    if (num1 === num2 && num2 === num3) {
        result = 'Все числа равны между собой';
        console.log(result);
        element.innerHTML = result;
        return;
    }
    result = `Максимальное значение ${max}`;
    console.log(result);
    element.innerHTML = result;
}

function sum() {
    let num1 = Number(document.getElementById('task4').value);
    let num2 = Number(document.getElementById('task4_1').value);
    let result = num1 + num2;
    console.log(result);
    let element = document.getElementById('task4Output');
    element.innerHTML = result;
}

function diff() {
    let num1 = Number(document.getElementById('task4').value);
    let num2 = Number(document.getElementById('task4_1').value);
    let result = num1 - num2;
    console.log(result);
    let element = document.getElementById('task4Output');
    element.innerHTML = result;
}

function mult() {
    let num1 = Number(document.getElementById('task4').value);
    let num2 = Number(document.getElementById('task4_1').value);
    let result = num1 * num2;
    console.log(result);
    let element = document.getElementById('task4Output');
    element.innerHTML = result;
}

function divis() {
    let num1 = Number(document.getElementById('task4').value);
    let num2 = Number(document.getElementById('task4_1').value);
    if (num2 === 0) {
        console.log('На ноль делить нельзя!');
        alert('На ноль делить нельзя!');
        return;
    }
    let result = num1 / num2;
    console.log(result);
    let element = document.getElementById('task4Output');
    element.innerHTML = result;
}

