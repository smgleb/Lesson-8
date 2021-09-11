// N.08 Домашнее задание Laptop_Ultrabook
// 1. Объявить класс под названием “Laptop”
// 2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер” “год изготовления”, “размер ОЗУ”, “размер ПЗУ”, “масса”. Учтите, что сейчас ноутбуки выпускаются без дисководов, и также присутствует вебкамера. Есть метод который выводит количество «ОЗУ и ПЗУ». Есть метод, который выводит название и модель.
// 3. Класс “Ultrabook”. Есть свойства: “название”, “модель ”, “ серийный номер ”, “ год изготовления ”, “размер ОЗУ”, “размер ПЗУ”. Учтите, что сейчас ультрабуки выпускаются без дисководов и есть вебкамера. Есть метод который выводит данные о названии, весе и год изготовления. Есть метод который выводит количество «размер ОЗУ и размер ПЗУ»


function Laptop(laptopName, model, serNumber, year, ozu, pzu, mass) {
	this.laptopName = laptopName;
	this.model = model;
	this.serNumber = serNumber;
	this.year = year;
	this.ozu = ozu;
	this.pzu = pzu;
	this.mass = mass;
	this.vebCam = true;
	this.disk = false;
}

Laptop.prototype.showMemory = function () {
	return 'ОЗУ: ' + this.ozu + ', ' + 'ПЗУ: ' + this.pzu;
}
Laptop.prototype.showName = function () {
	return 'Название: ' + this.laptopName + ', ' + 'Модель: ' + this.model;
}

let mac = new Laptop('Масbook', 'Pro', '121233', '2021', '16 ГБ', '8 ГБ', '1800г');
console.log(mac);
console.log(mac.showMemory());
console.log(mac.showName());



function Ultrabook(laptopName, model, serNumber, year, ozu, pzu, mass) {
	Laptop.call(this, laptopName, model, serNumber, year, ozu, pzu, mass);
};


Ultrabook.prototype = Object.create(Laptop.prototype);


Ultrabook.prototype.showInfo = function () {
	return 'Название: ' + this.laptopName + ', ' + 'Вес: ' + this.mass + ', ' + 'Год изготовления: ' + this.year;
}

let Ulbook = new Ultrabook('ASUS', 'Zbook', '23123213', '2020', '8', '32', '1200г');
console.log(Ulbook);
console.log(Ulbook.showInfo());
console.log(Ulbook.showName());



// ES6-----------------------------------------

// class Laptop {
// 	constructor(laptopName, model, serNumber, year, ozu, pzu, mass) {
// 		this.laptopName = laptopName;
// 		this.model = model;
// 		this.serNumber = serNumber;
// 		this.year = year;
// 		this.ozu = ozu;
// 		this.pzu = pzu;
// 		this.mass = mass;
// 		this.vebCam = true;
// 		this.disk = false;
// 	}
// 	showMemory() {
// 		return 'ОЗУ: ' + this.ozu + ', ' + 'ПЗУ: ' + this.pzu;
// 	}
// 	showName() {
// 		return 'Название: ' + this.laptopName + ', ' + 'Модель: ' + this.model;
// 	}
// }

// class Ultrabook extends Laptop {
// 	constructor(laptopName, model, serNumber, year, ozu, pzu, mass) {
// 		super(laptopName, model, serNumber, year, ozu, pzu, mass);
// 	}

// 	showInfo() {
// 		return 'Название: ' + this.laptopName + ', ' + 'Вес: ' + this.mass + ', ' + 'Год изготовления: ' + this.year;
// 	}
// }

// let mac = new Laptop('Масbook', 'Pro', '121233', '2021', '16 ГБ', '8 ГБ', '1800г');
// console.log(mac);
// console.log(mac.showMemory());
// console.log(mac.showName());


// let Ulbook = new Ultrabook('ASUS', 'Zbook', '23123213', '2020', '8', '32', '1200г');
// console.log(Ulbook);
// console.log(Ulbook.showInfo());
// console.log(Ulbook.showName());