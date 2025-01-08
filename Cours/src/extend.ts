import { Animal } from "./class/Animal.js";

class Chien extends Animal {
  constructor(nom: string, couleur: string) {
    super("Chien", "Wouaf", nom, couleur);
  }
}

class Chat extends Animal {
  constructor(nom: string, couleur: string) {
    super("Chat", "Miaou", nom, couleur);
  }
}

const scoobyDoo = new Chien("Scooby-Doo", "Marron");
const tigrou = new Chat("Tigrou", "Orange");

console.log(scoobyDoo.getSon(), scoobyDoo.getCouleur());
console.log(tigrou.getSon(), tigrou.getCouleur());
