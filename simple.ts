// interface to make sure all objects have a name and price
interface Iprops {
  name: string;
  price: number;
}

let $;

class Telephone implements Iprops {
  constructor (public name: string, public price: number, public loudness: number) {}
}

class Fruit implements Iprops {
  constructor (public name: string, public price: number, public color: string) {}
}

let inventory = [];

//function to add new fruit to inventory
let addFruitToInventory = function(name: string, price: number, color: string) {

  inventory.push(new Fruit(name, price, color));

}

//this is silly and would never do this in real world.
addFruitToInventory("Apple", 5, "Red");
addFruitToInventory("Banana", 3, "Yellow");
addFruitToInventory("Grape", 2, "Green");

// Function to add new telephone objects to inventory.
let addTelephoneToInventory = function(name: string, price: number, loudness: number) {

  inventory.push(new Telephone(name, price, loudness));

}

//again, silly.
addTelephoneToInventory("Phone1", 10, 5);
addTelephoneToInventory("Phone2", 20, 10);

//Function to loop through array, add li elements to a ul and display properties of
//objects in the array.
function showInventory(item: Iprops) {
  for (let items in item) {
    $("#ul1").append("<li>Name: " + item[items].name + ", Price: " + item[items].price + "</li>");
  }
};
