/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten


And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

let monkey1 = { name:"Yellow baboon",
    species:"Papio cynocephalus kindae",
    foodsEaten:["fruits", "plant parts"],
    eatSomething: function(thingAsString){
        this.foodsEaten.push(thingAsString);
        },
    introduce: function(){
        console.log("Hi My name is: "+ this.name + " I'm " + this.species + " I eat " + this.foodsEaten );

    },
};

let monkey2 = { name:"Mandrill",
    species:"Mandrillus sphinx",
    foodsEaten:["fruits"],
    eatSomething: function(thingAsString){
        this.foodsEaten.push(thingAsString);
    },
    introduce: function(){
        console.log("Hi My name is: "+ this.name + " I'm " + this.species + " I eat " + this.foodsEaten );
    },
};

let monkey3 = { name:"lion-tailed macaque",
    species:"Macaca silenus",
    foodsEaten:["indigenous fruits", "leaves", "buds", "insects"],
    eatSomething: function(thingAsString){
        this.foodsEaten.push(thingAsString);
        },
    introduce: function(){
        console.log("Hi My name is: "+ this.name + " I'm " + this.species + " I eat " + this.foodsEaten );

    }
};
console.log("The first Monkey: ");
monkey1.introduce();
console.log("The second Monkey: ");
monkey2.eatSomething(["leaves", "lianas", "bark", "stems","fibers"]);
monkey2.introduce();
console.log("The third Monkey: ");
console.log(monkey3.name);
console.log(monkey3.species);
console.log(monkey3["foodsEaten"]);