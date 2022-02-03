const sumInput = () => {
    let arr = [];
    let sum = 0;


    let condition = false;
    do {
        let value = prompt("Введите число", '');
        condition = !(value === '' || (!(+value) && value !== '0'));
        if (condition) arr.push(+value);
    }
    while (condition);

    // for (;;) {
    //     let value = prompt("Введите число", '');
    //     if (value === '' || (!(+value) && value !== '0')) break;
    //     arr.push(+value);

    // }
    alert(arr.sort((a, b) => a - b));
    arr.forEach((elem) => {
        sum += elem;
    });
    return sum;
};
alert(`Сумма: ${sumInput()}`);