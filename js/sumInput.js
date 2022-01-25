const sumInput = () => {
    let arr = [];
    sum = 0;
    for (;;) {
        let value = prompt("Введите число", '');
        if (value === '' || (!(+value) && value !== '0')) break;
        arr.push(+value);

    }
    alert(arr.sort((a, b) => a - b));
    arr.forEach((elem) => {
        sum += elem;
    });
    return sum;
};
alert(`Сумма: ${sumInput()}`);