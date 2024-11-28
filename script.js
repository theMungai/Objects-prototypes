function Student(name, age){
  this.name = name;
  this.age = age;
}

const student1 = new Student("Jason", 24);
console.log(student1);
console.log(Object.getPrototypeOf(student1) === Student.prototype)

function Player(name, marker){
    this.name = name;
    this.marker = marker
    this.sayName = function (){
      console.log(this.name)
    }
  }
  
  const player1 = new Player("Steve", "X");
  const player2 = new Player("Tim", "O");
  
  player1.sayName();
  player2.sayName();
  
  console.log(Object.getPrototypeOf(player1) === Player.prototype)
  
  // Defining a function on the Player.prototype
  Player.prototype.sayHello = function(){
    console.log(`${this.name}, I'm a programmer`)
  }
  
  player1.sayHello();
  
  console.log(player1.valueOf())