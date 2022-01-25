(function () {
    const arr = ['js', 'css', 'html'];
    alert(`Первый элемент массива ${arr}: ${arr[0]}`);
})();

(function () {
    const arr = [0, 1, false, 2, undefined, '', 3, null];
    alert(arr.filter(el => el));
})();



(function () {
    const arr = [
        [1, 2],
        [1, 2, 3],
        [1, 2, 3, 4]
    ];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            alert(`Индекс массива, длина которого >3: ${i}`);
            break;
        }
    }

})();