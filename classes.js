/**
 * Решение задачи № 3
 */
class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
    }
}

const human1 = new Human('vasya', 30, '1978-02-20');
console.log(human1.displayInfo());

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + `, ${this.salary}, ${this.department}`;
    }
}

let man = new Employee('pet', 40, '1986-05-12', 15000, 'dev');
console.log(man.displayInfo());

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }

    changeManager(managerName) {
        this.manager = managerName;
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.subordinates = [];
    }

    addDeveloper(obj) {
        if (obj instanceof Developer && obj.manager === this.name) {
            this.subordinates.push(obj);
        } else {
            console.log('ошибка. объект не пренадлежит к классу Developer или к этому менеджеру');
            return;
        }
    }

    removeDeveloper(obj) {
        if (obj instanceof Developer && obj.manager === this.name) {
            let arr = this.subordinates;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === obj.name && arr[i].age === obj.age) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }else{
            console.log('ошибка. объект не пренадлежит к классу Developer или к этому менеджеру');
            return;
        }
    }

}