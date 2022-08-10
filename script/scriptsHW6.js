let a1= "1.1) Создать абстрактный класс Human";
console.log(a1);
// 1.1) Создать абстрактный класс Human
// 	Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
// 	Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.
class Human {
    constructor(height, weight, name, age, sex, disability ) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.disability = true;

    }
    get getInfo() {
        const information = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            age: this.age,
            sex: this.sex,
            disability: this.disability,

        };
        console.log(information);                         // показывает объект
    }
    sayHi() {
        console.log("Привет, меня зовут" + ' '+ this.name);    // console.log(`Привет, меня зовут ${this.name}`);
    }
    set setNewDisability(disability) {
        this.disability = disability;
        console.log('теперь инвалидность равняется' + ' ' + disability);
    }
    set setName(name) {
        this.name = name;
        console.log('теперь меня зовут' + ' ' + name);
    }
}
const fh = new Human('192', '95', 'Stas', new Date('05-06-1983'), 'men', true, );
fh.sayHi();
console.log(fh);
fh.getInfo;
fh.setName = 'Ivan';
fh.setNewDisability = false;
fh.getInfo;

//==============================================================
let a2= "1.2)Создать два класса(которые должны зависеть от абстракции):";
console.log(a2);
// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель
class FrontEnd extends Human{
    constructor(height, weight, name, age, sex, disability) {
        super(height, weight, name, age, sex, disability);

    }
    get getInfo() {
        return {...super.getInfo }
    }
    sayHi() {
        console.log("Привет, меня зовут" + ' ' + this.name);
    }
};

const fhFrontEnd = new FrontEnd('180', '55', 'Vlad', new Date('05-06-1983'), 'men', true,);
fhFrontEnd.sayHi();
console.log(fhFrontEnd);


// //-----------------------------------------------------------
class Builder extends Human{
    constructor( height, weight, name, age, sex, disability){
        super(height, weight, name, age, sex, disability);
    }
    get getInfo() {
        return { ...super.getInfo }
    }

    sayHi() {
        console.log("Привет, меня зовут" + ' ' + this.name);
    }
};
const fhBuilder =new Builder('182', '65', 'Vasilij', new Date('05-06-1983'), 'men', true,);
fhBuilder.sayHi();
console.log(fhBuilder);

//========================================================
let a3= "1.3) Класс Фронтенд разработчик:";
console.log(a3);
// 1.3) Класс Фронтенд разработчик:
// 	Добавить доп. свойства:
// 		- начало карьеры(формат Date),
// 		- предыдущие компании(массив объектов
// 			{
// 				start: new Date(),
// 				end: new Date(),
// 				salaryPerMonth: number,
// 				position: 'middle' или 'junior' или 'senior',
// 				companyName: 'Oracle',
// 			})
// 	Добавить доп. методы:
// 		- изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// 		- добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
// 		высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
// 		в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// 		- добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// 		- возможность добавить компанию в массив предыдущих компаний по примеру объекта выше
let prevCompany = [{
    start: new Date('2005-7-1'),
    end: new Date('2005-8-2'),
    salaryPerMonth: 1000,
    position: 'junior',
    companyName: 'ais',
},
    {
        start: new Date('2019-5-1'),
        end: new Date('2019-6-2'),
        salaryPerMonth: 2000,
        position: 'middle',
        companyName: 'tot',
    },
    {
        start: new Date('2022-7-3'),
        end: new Date('2022-8-8'),
        salaryPerMonth: 3000,
        position: 'senior',
        companyName: 'Oracle',
    }
];

class FrontEnd3 extends Human {
    constructor(height, weight, name, age, sex, disability, startCareer, prevCompany) {
        super(height, weight, name, age, sex, disability);
        this.startCareer = startCareer;
        this.prevCompany = prevCompany;
    }

    get getInfo() {
        return {
            ...super.getInfo,
            startCareer: this.startCareer,
            prevCompany: this.prevCompany

        }
    }
    sayHi() {
        console.log("Привет, меня зовут" + ' ' + this.name + ' ' + ',я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)');
    }
    selary(){
        let ss = 0;
        let diffInMonths = prevCompany.reduce((acc,el)=>{
            acc= Math.abs(el.end.getTime() -el.start.getTime());
            acc= Math.round(acc / (2e3 * 3600 * 365));
            acc = acc * el.salaryPerMonth;
            ss += acc;
        }, 0)
        console.log(ss, 'всего заработал ');
    }
    workHistory(company) {
        let ww = prevCompany.filter(object => {
            return object.companyName===company
        })
        console.log(ww);
    }
    dobwork(object) {
        prevCompany.push(object)
        console.log(prevCompany);
    }

}

let fhFrontEnd3 =new FrontEnd3('188', '60', 'Tolik', new Date('05-06-1983'), 'men', true, new Date('01-08-2000'), prevCompany);
fhFrontEnd3.sayHi();
fhFrontEnd3.selary();
console.log(fhFrontEnd3);
fhFrontEnd3.workHistory('ais');
fhFrontEnd3.dobwork({start: new Date('2010-5-1'),
    end: new Date('2015-6-2'),
    salaryPerMonth: 2000,
    position: 'middle',
    companyName: 'mog',});



//=======================================================
let a4= "1.4) Класс Строитель:";
console.log(a4);
// 1.4) Класс Строитель:
// 	Добавить доп. свойства:
// 		- локация строительного объекта(строка)
// 		- набор инструментов (массив строк ['кирка', 'топор'])
// 		- скорость выполнения работы на один квадратный метр (количество минут - number)
// 	Добавить доп. методы:
// 		- метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней
//        займет постройка дома текущим мастером
// 		если меньше одного дня - показать количество часов
// 		если больше одного дня - показать количество дней и часов
// 		если больше недели - показать количество недель дней и часов
// 		если больше месяца - показать количество месяцев недель дней и часов
// 		если больше года - показать количество лет месяцев недель дней и часов
let nabor = ['кирка', 'топор'];

class Builder4 extends Human {
    constructor(height, weight, name, age, sex, disability, lokacija, nabor, speed) {
        super(height, weight, name, age, sex, disability);
        this.lokacija = lokacija;
        this.nabor = nabor;
        this.speed = speed;
    }
    get getInfo() {
        return {
            ...super.getInfo,                             //xдней=кв.м2*speed
            lokacija: this.lokacija,
            nabor: this.nabor,
            speed: this.speed
        }
    }
    sayHi() {
        console.log("Привет, меня зовут" + ' ' + this.name);
    }
    building(kolMetr) {
       let kolMin = this.speed * kolMetr
       let kolHour = Math.floor(kolMin / 60);
       let lastHour = kolHour % 24;
       let kolDay = Math.floor(kolHour / 24)
       let lastDay = kolDay % 7;
       let kolWeek = Math.floor(kolDay / 7);
       let lastWeek = kolWeek % 4;
       let kolMonthe = Math.floor(kolWeek / 4);
       let lastMonthe = kolMonthe % 12;
       let kolYear = Math.floor(kolMonthe / 12);
       if (kolHour < 24) {
            return `${kolHour} часов`;
       }
        else if (kolHour > 24 && kolDay < 7) {
           return `${kolDay}дней и ${lastHour} часов`;
        }
        else if (kolDay > 7 && kolWeek < 4) {
           return `${kolWeek} недель ${lastDay} дней и ${lastHour}часов`;
       }
       else if (kolWeek > 4 && kolMonthe < 12) {
           return `${kolMonthe} месяцев ${lastWeek}недель ${lastDay} дней и ${lastHour} часов`
       }
       else {
           return `${kolYear} лет ${lastMonthe} месяцев ${lastWeek} недель ${lastDay} дней ${lastHour}`;
       }
         console.log(building(kolMetr));
    }
}
const fhBuilder4 =new Builder4('182', '65', 'Vasilij', new Date(83), 'men', true, 'Барабашова', nabor, 60);
fhBuilder4.sayHi();
console.log(fhBuilder4);
let nadoVremeny = fhBuilder4.building(24);
console.log(nadoVremeny);