class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
  }
  
  class Car {
    constructor(brand, model, year, licensePlate, owner) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
      this.owner = owner;
      if (owner.age < 18) {
        console.log(`Власник ${owner.name} не може мати автомобіль`);
      }
    }
  
    displayInfo() {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
      console.log('Власник:');
      this.owner.displayInfo();
    }
  }
  
  const person1 = new Person('Олександр', 25);
  const person2 = new Person('Марія', 17);
  const person3 = new Person('Іван', 30);
  
  const car1 = new Car('Toyota', 'Camry', 2018, 'BC1234AB', person1);
  const car2 = new Car('Honda', 'Civic', 2015, 'KA4321BC', person2);
  const car3 = new Car('BMW', 'X5', 2020, 'AI6789OP', person3);
  
  car1.displayInfo();
  car3.displayInfo();
  