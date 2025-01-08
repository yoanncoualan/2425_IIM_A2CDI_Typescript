import { VoitureInterface } from "./interfaces/Voiture.js";

namespace ExempleImplements {
  class Voiture implements VoitureInterface {
    roues: number;
    nom: string;

    constructor(roues: number, nom: string) {
      this.roues = roues;
      this.nom = nom;
    }

    get(): string {
      return `${this.nom} possède ${this.roues} roues`;
    }
  }

  const voiture1 = new Voiture(4, "Tesla");
  console.log(voiture1.get());

  const voiture2 = new Voiture(4, "Renault");
  console.log(voiture2.get());
}
