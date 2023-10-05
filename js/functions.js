function checkLineLength(inputStr, maxLength){
  if (inputStr.length <= maxLength){
    return true;
  }
  return false;
}

checkLineLength('проверяемая строка', 20); // true
checkLineLength('проверяемая строка', 18); // true
checkLineLength('проверяемая строка', 10); // false

function isPalindrom(inputStr){
  const line = inputStr.replaceAll(' ','').toLowerCase();
  let reversedLine = '';
  for (let i = line.length - 1; i >= 0; i--){
    reversedLine += line[i];
  }
  return reversedLine === line;
}

isPalindrom('топот'); // true
isPalindrom('ДовОд'); // true
isPalindrom('Кекс');  // false
isPalindrom('Лёша на полке клопа нашёл '); // true
