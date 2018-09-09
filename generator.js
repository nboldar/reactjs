/**
 * решение задачи №4
 */
class newHuman {
    constructor() {
        this.init();
        this.display();
    }

    init() {
        let firstName = prompt('Назовите свое имя');
        let lastName = prompt('Назовите свою фамилию');
        let age = prompt('Ваш возвраст');
        let gender = prompt('Ваш пол');
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
    }
    display(){
        console.log(this);
    }
}
let human15=new newHuman();