namespace CompteBancaire {
  class CompteBancaire {
    titulaire: string;
    solde: number;

    constructor(titulaire: string, solde: number) {
      this.titulaire = titulaire;
      this.solde = solde;
    }

    crediter(montant: number): void {
      this.solde += montant;
    }

    debiter(montant: number): void {
      this.solde -= montant;
    }

    getSolde(): number {
      return this.solde;
    }
  }

  const yoann = new CompteBancaire("Yoann", 0);
  console.log(yoann.getSolde());

  yoann.crediter(100);
  console.log(yoann.getSolde());

  yoann.debiter(50);
  console.log(yoann.getSolde());
}
