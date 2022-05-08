const palindrome = (str) => {
    // Нижний регистр
    str = str.toLowerCase();
    // Проверка на наличие значения в инпуте
    if (str == "") return "Введите значение!";
    // Перевод строки в массив
    /* str2 = str.split(''); Этот фрагмент - более длинная версия кода
    str2 = str2.reverse();
    str2 = str2.join(''); */
    // Более короткий перевод строки в массив
    str2 = str.split('').reverse().join('');
    // Проверка на палиндром
    if (str == str2) return true; else return false;
}
// Считывание значения input'а, и вывод его проверки на палиндром
const inputVal = document.querySelector('input');
const result = document.querySelector('span');
button.onclick = function() {
	result.innerHTML = palindrome(input.value);
}
