const checkLineLength = (input, maxLength) => input.length <= maxLength;

checkLineLength('проверяемая строка', 20); // true
checkLineLength('проверяемая строка', 18); // true
checkLineLength('проверяемая строка', 10); // false

const isPalindrom = (inputStr) => (inputStr.toLowerCase().replaceAll(' ', '') === inputStr.toLowerCase().replaceAll(' ', '').reverse());

isPalindrom('топот'); // true
isPalindrom('ДовОд'); // true
isPalindrom('Кекс');  // false
isPalindrom('Лёша на полке клопа нашёл '); // true
