var ExempleImplements;
(function (ExempleImplements) {
    class Voiture {
        constructor(roues, nom) {
            this.roues = roues;
            this.nom = nom;
        }
        get() {
            return `${this.nom} possède ${this.roues} roues`;
        }
    }
    const voiture1 = new Voiture(4, "Tesla");
    console.log(voiture1.get());
    const voiture2 = new Voiture(4, "Renault");
    console.log(voiture2.get());
})(ExempleImplements || (ExempleImplements = {}));
export {};
