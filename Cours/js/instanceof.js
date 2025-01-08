import { Animal } from "./class/Animal.js";
var Exemple_instanceof;
(function (Exemple_instanceof) {
    class Chien extends Animal {
        constructor(nom, couleur) {
            super("Chien", "Wouaf", nom, couleur);
        }
    }
    class Chat extends Animal {
        constructor(nom, couleur) {
            super("Chat", "Miaou", nom, couleur);
        }
    }
    function estUnChat(animal) {
        return animal instanceof Chat;
    }
    const scoobyDoo = new Chien("Scooby-Doo", "Marron");
    const tigrou = new Chat("Tigrou", "Orange");
    console.log("scoobyDoo est un Chat ?", estUnChat(scoobyDoo)); // false
    console.log("tigrou est un Chat ?", estUnChat(tigrou)); // true
})(Exemple_instanceof || (Exemple_instanceof = {}));
