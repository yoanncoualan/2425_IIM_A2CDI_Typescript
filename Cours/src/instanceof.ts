import { Animal } from "./class/Animal.js";

namespace Exemple_instanceof {
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

  function estUnChat(animal: any): boolean {
    return animal instanceof Chat;
  }

  const scoobyDoo = new Chien("Scooby-Doo", "Marron");
  const tigrou = new Chat("Tigrou", "Orange");

  console.log("scoobyDoo est un Chat ?", estUnChat(scoobyDoo)); // false
  console.log("tigrou est un Chat ?", estUnChat(tigrou)); // true
}
