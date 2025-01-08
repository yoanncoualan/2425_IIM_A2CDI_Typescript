import { Developpeur } from "./Developpeur.js";
import { Designer } from "./Designer.js";
import { Entreprise } from "./Entreprise.js";

const developpeur = new Developpeur();
const designer = new Designer();

console.log(
  `Développeur : ${developpeur.travailler()} pour ${developpeur.getSalaire()}€`
);
console.log(
  `Designer : ${designer.travailler()} pour ${designer.getSalaire()}€`
);

const entreprise = new Entreprise([developpeur]);
console.log(`Masse salariale : ${entreprise.getMasseSalariale()}€`);

entreprise.addEmploye(designer);
console.log(`Masse salariale : ${entreprise.getMasseSalariale()}€`);
