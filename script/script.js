let a1= "1 - Создать переменную каждого типа данных";
console.log(a1)
// 1 - Создать переменную каждого типа данных.
//==========Number
let numberB=123;
console.log(numberB);
//=======String
let string="Текстовый тип переменной";
console.log(string);
//========Boolean
let qwe=true;
console.log(qwe);
//==========Undefined
let trust=undefined;
console.log(trust);
//=========Null
let myNull=null;
console.log(myNull);
//==========Symbol
let symbol= Symbol("id");
console.log(typeof symbol);
//==============Bigint
/*этот тип не может содержать числа больше, чем 9007199254740991
 или меньше, чем -9007199254740991 */
let bigInt=1234567899966541213264n;
bigInt=Number(bigInt);
console.log(typeof bigInt);
//===========Object
let myObj={
    name: "Вася",
    weight: "92"
}
console.log(myObj);
myObj=Number(myObj);
console.log(typeof myObj);

//===================================================
let a2= "2 - Создать переменную var, let, const. Перезаписать их значения(не для const)";
console.log(a2);
// 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
var number1=123;
let number2=222;
const number3='текст 123';
// number1=number2;
//console.log(number1);
//number2=number3;
//console.log(number2);
number1=number3;
console.log(number1);


//=========================================================
let a3= "3-Привести тип каждого типа данных хотя бы 2-3мя способами(Google)";
console.log(a3);
//--------------каждый тип данных в строку------------------
//====3.1.1===
let userStrS=10;
userStrS=String(userStrS)
console.log(typeof userStrS);
//====3.1.2===
let boolean1=true;
if(boolean1) {
    console.log('идет дождь');
} else {
    console.log('идет снег');
}
boolean1=String(boolean1);
console.log(typeof boolean1);
//====3.1.3===
let user=undefined;
user=String(user);
console.log(typeof user);
//====3.1.4====
let userNameN=null;
userNameN=String(userNameN);
console.log(typeof userNameN);
//=====3.1.5===
let iidS= Symbol("id");
console.log(iidS);
iidS=String(iidS);
//=====3.1.6====
const bigIntS=1234567899966541213264n;
console.log(typeof bigIntS.toString());
//======3.1.7
let myObject={
    name: "Вася",
    weight: "92"
}
console.log(myObject);
console.log(typeof myObject.toString());
//----------------------каждый тип в число---------------

//====3.2.1
let strN='10';
strN=Number(strN);
console.log(typeof strN);
//====3.2.2========
let boolean=true;
if(boolean) {
    console.log('идет дождь');
} else {
    console.log('идет снег');
}
boolean=Number(boolean);
console.log(typeof boolean);
//====3.2.3======
let userName42=undefined;
console.log(typeof parseFloat(userName42));
//====3.2.4======
let userName43=null;
console.log(typeof parseFloat(userName43));
//=====3.2.5======
let idN= Symbol("id");
console.log(idN);
idN = String(idN);
console.log(typeof parseFloat(idN));
//=====3.2.6=======
let bigint=1234567899966541213264n;
bigint=Number(bigint);
console.log(typeof parseFloat(bigint));
//======3.2.7==========
let myObjectN={
    name: "Вася",
    weight: "92"
}
console.log(myObjectN);
console.log(typeof myObjectN);
myObjectN=Number(myObjectN);
console.log(typeof myObjectN);

//======================================================


let a4= "4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных";
console.log(a4);

// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных

//---------сумма строки с каждым типом данных
let stringS="Солнце"+"Яркое"; //="СолнцеЯркое"
let numb="Солнце"+111;//="Солне111"
let booleanSt="Солнце"+true;//="Солнцеtrue"
let art= "Солнце"+undefined;//"=Солнцеundefined"
let sNul="Солнце"+null;//"Солнцеnull"
// let symbS="Солнце"+ Symbol("id");//=Ошибка-закомментировал, чтобы программа шла к следующим задачам
let bigIntSt="Солнце"+10n;//"Солнце10"
//let objStr="Солнце"+ (name: "Вася" surname: "Иванов")//=Ошибка-закомментировал, чтобы программа шла к следующим задачам

//----------сумма числа с каждым типом данных
let stringN=123+"Солнце";//="123Солнце"
let numbN=123+123;//=246
let booleanN=123+true;//=124
let artN= 123 + undefined;//=NaN
let sNulN=123+null;//=123
// let symbN="Солнце"+ Symbol("id")// =Ошибка, =Ошибка-закомментировал, чтобы программа шла к следующим задачам
let bigIntN="Солнце"+10n;//Ошибка
// let objN="Солнце"+ (name: "Вася", job: "водитель")//=Ошибка-закомментировал, чтобы программа шла к следующим задачам=


//=========================================================
let a5= "5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.";
console.log(a5);

// 5 - Сделать отнимание: строка с каждым типом данных; числа с каждым типом данных.

//---------строка с каждым типом данных
let stringSO="6"-"4"; //=2
let numbO="6"-1;//=5
let booleanStO="6"-true;//=5
let artO= "6"-undefined;//=NaN
let sNulO="6"-null;//=6
// let symbSo="6"- Symbol("id");//==Ошибка-закомментировал, чтобы программа шла к следующим задачам
// let bigIntSto="6"-10n;//==Ошибка-закомментировал, чтобы программа шла к следующим задачам
// let objStrO="6"- (name: "Вася", surname: "Иванов")//==Ошибка-закомментировал, чтобы программа шла к следующим задачам

//----------число с каждым типом данных
let stringNO=6-"4"; //=2
let numbNO=6-1;//=5
let booleanNO=6-true;//=5
let artNo= 6-undefined;//=NaN
let sNulNo=6-null;//=6
// let symbNo=6- Symbol("id");//=Ошибка-закомментировал, чтобы программа шла к следующим задачам
// let bigIntNo=6-10n;//==Ошибка-закомментировал, чтобы программа шла к следующим задачам
// let objNo=6- (name: "Вася", weight: "92")// =Ошибка-закомментировал, чтобы программа шла к следующим задачам
//===========================================================

let a6= "6 - Задача (Условный оператор)";
console.log(a6);

// 6 - Задача (Условный оператор).Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

let login = 'kykold';
let password='1234asdQQ';
login = prompt('Введите login');
password = prompt('Введите password');
let message = (login == 'kykold' && password== '1234asdQQ') ? 'Добро пожаловать': 'Ошибка входа';
alert( message );

//=========================================
let a7= "7 - Задача (Условный оператор)";
console.log(a7);
// 7 - Задача (Условный оператор)
//  Пользователь вводит год рождения. Программа показывает количество
//  лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
//  если нет – «вход воспрещен».
year=prompt('Введите свой год рождения');
let year1=(year <= 2006) ? 'Добро пожаловать' :
    'Вход воспрещен';
alert(year1);
//==========================================
let a8= "8 - Задача (Условный оператор)";
console.log(a8);
// 8 - Задача (Условный оператор)
//  Создайте программу, которая выводит надбавку за стаж.
//  Пользователь вводит стаж работы, а программа пишет ему надбавку.

stag=prompt('Введите свой стаж работы');
let stag1= (stag>=35) ? 'Надбавка' : '';
alert(stag1);

//==========================================
let a9= "9 - Задача (Условный оператор и свитч кейс)";
console.log(a9);
//Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//  9.1 Решить на иф елсах
let dayWeek=prompt('Введите цифру от 1 до 7');
if(dayWeek==1) {
    alert('Monday');}
else if(dayWeek==2){
    alert('Tuesday');}
else if(dayWeek==3){
    alert('Wednesday');}
else if(dayWeek==4){
    alert('Thursday');}
else if(dayWeek==5){
    alert('Friday');}
else if(dayWeek==6){
    alert('Saturday');}
else if (dayWeek == 7){
    alert('Sunday');}


//  9.2 Решить на свитч кейсе

let dayWeekS=prompt('Введите цифру от 1 до 7');
switch (dayWeekS) {
    case '1':
        alert( 'Monday' );
        break;
    case '2':
        alert( 'Tuesday' );
        break;
    case '3':
        alert( 'Wednesday' );
        break;
    case '4':
        alert( 'Thursday' );
        break;
    case '5':
        alert( 'Friday' );
        break;
    case '6':
        alert( 'Saturday' );
    case '7':
        alert( 'Sunday' );
        break;
    default:
        alert( "Нет таких значений" );
}


//  9.3 Решить на тернарном операторе

dayWeek=prompt('Введите цифру от 1 до 7');
let dayWeekT=(dayWeek ==1) ? 'Monday':
    (dayWeek == 2) ? 'Tuesday':
        (dayWeek == 3) ? 'Wednesday':
            (dayWeek == 4) ? 'Thursday':
                (dayWeek == 5) ? 'Friday':
                    (dayWeek == 6) ? 'Saturday':
                        (dayWeek == 7) ? 'Sunday':'';
alert(dayWeekT);


//==========================================
let a10= "10 - Задача (Условный оператор)";
console.log(a10);
//10 - Задача (Условный оператор)
//  Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//  1, если значение больше нуля,
//  -1, если значение меньше нуля,
//  0, если значение равно нулю.

let figure=prompt('Введите число');
if(figure>0) {
    alert(1);
}
else if(figure<0) {
    alert(-1);
}
else {
    alert(0);
}
// figure=prompt('Введите число');
// let figure1 = (figure > 0) ? '1' :
//     (figure < 0) ? '-1' :
//         (figure == 0) ? '0': '';
// alert(figure1);

//=========================================
let a11= "11 - Задача (Тернарный оператор)";
console.log(a11);
//-11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
login=prompt('Кто Вы- Сотрудник или Директор')
let login1=(login =='Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
        (login == '') ? 'Нет логина': '';
alert(login1);

//===================================================
let a12= "12 - Задача (Условный оператор)";
console.log(a12);
// 12 - Задача (Условный оператор)
//  В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
//  Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
let aport = prompt('Введите номер квартиры от 1 до 90');
let aport1=(aport >= 1 && aport <= 20) ? 'В первом подъезде':
    (aport >= 21 && aport<= 48) ? 'Во втором  подъезде':
        (aport >= 49 && aport <= 90) ? 'В третьем подъезде': '';
alert(aport1);

// let aport = prompt('Введите номер квартиры от 1 до 90');
// if (aport >= 1 && aport <= 20) {
//     alert("В первом подъезде");
// }
// if (aport >= 21 && aport <= 48) {
//     alert("Во втором  подъезде");
// }
// if (aport >= 49 && aport <= 90) {
//     alert("В третьем подъезде");
// }
//====================================================
let a13= "13 - Задача (Условный оператор)";
console.log(a13);
// Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;
//
//     default:
//         alert( 'We hope that this page looks ok!' );
// }

let browser=prompt('Введите название браузера');
if(browser=='Edge') {
    alert('Youve got the Edge!');
}
else if(browser=='Chrome'
    ||browser=='Firefox'
    ||browser=='Safari'
    ||browser=='Opera'){
    alert('Okay we support these browsers too');
}
else {
    alert( 'We hope that this page looks ok!' );
}


//==========================================================
let a14= "14 - Задача (свитч кейс)";
console.log(a14);
//Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:
//
// const number = +prompt('Введите число между 0 и 3', '');
//
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
const number=+prompt('Введите число между 0 и 3','');
switch (number) {

    case 0:
        alert( 'Вы ввели число 0' );
        break;
    case 1:
        alert( 'Вы ввели число 1' );
        break;
    case 2:
    case 3:
        alert( 'Вы ввели число 2, а может и 3' );
        break;

}
//========================================================