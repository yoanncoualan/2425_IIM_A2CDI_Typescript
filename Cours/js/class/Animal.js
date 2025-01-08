export class Animal {
    constructor(type, son, nom, couleur) {
        this.type = type;
        this.son = son;
        this.nom = nom;
        this.couleur = couleur;
    }
    getSon() {
        return this.son;
    }
    getCouleur() {
        return this.couleur;
    }
}
