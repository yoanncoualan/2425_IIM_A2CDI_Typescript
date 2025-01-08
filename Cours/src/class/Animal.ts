import { AnimalType } from "../types/Animal";

export abstract class Animal {
  readonly type: AnimalType;
  son: string;
  nom: string;
  private couleur: string;

  constructor(type: AnimalType, son: string, nom: string, couleur: string) {
    this.type = type;
    this.son = son;
    this.nom = nom;
    this.couleur = couleur;
  }

  getSon() {
    return this.son;
  }

  getCouleur(): string {
    return this.couleur;
  }
}
