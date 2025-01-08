interface Voiture {
  marque: string;
  prix: number;
}

interface Electrique {
  autonomie: number;
}

type VoitureElectique = Voiture & Electrique;

const voiture1: VoitureElectique = {
  marque: "Tesla",
  prix: 100000,
  autonomie: 500,
};

const voiture2: Voiture = {
  marque: "Renault",
  prix: 10000,
};
