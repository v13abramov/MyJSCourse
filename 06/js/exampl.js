$(document).ready(function(){
	/*
	1. Якщо змінна a більше або дорівнює нулю, то виведіть 'Вірно', 
	інакше виведіть 'Невірно'. 
	Перевірте роботу скрипта при a, що дорівнює 1, 0, -3. 

	2. Якщо змінна a дорівнює нулю або дорівнює двом, то додайте до неї 7, 
	інакше поділіть її на 10. 
	Виведіть нове значення змінної на екран. 
	Перевірте роботу скрипта при a, що дорівнює 5, 0, -3, 2. 

	3. Дано рядок з цифрами, наприклад, '12345'. 
	Перевірте, що першим символом цього рядка є цифра 1, 2 або 3. 
	Якщо це так - виведіть "так", в іншому випадку виведіть "ні".
	*/

	//1
	var a = 1;
	
	if(a >= 0) {
		alert('Correct');
	} else {
		alert('Wrong');
	}

	//2
	if(a === 0 || a === 2) {
		alert(a += 7);
	} else {
		alert(a/10);
	}

	//3
	var str = '12345';
	var firstNum = +str[0];
	
	if(firstNum >= 1 && firstNum <= 3) {
		alert('Yes');
	} else {
		alert('No');
	}
});