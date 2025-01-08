"use strict";
var CompteBancaire;
(function (CompteBancaire_1) {
    class CompteBancaire {
        constructor(titulaire, solde) {
            this.titulaire = titulaire;
            this.solde = solde;
        }
        crediter(montant) {
            this.solde += montant;
        }
        debiter(montant) {
            this.solde -= montant;
        }
        getSolde() {
            return this.solde;
        }
    }
    const yoann = new CompteBancaire("Yoann", 0);
    console.log(yoann.getSolde());
    yoann.crediter(100);
    console.log(yoann.getSolde());
    yoann.debiter(50);
    console.log(yoann.getSolde());
})(CompteBancaire || (CompteBancaire = {}));
