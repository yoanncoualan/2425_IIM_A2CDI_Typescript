import { Developpeur } from "./Developpeur.js";
import { Designer } from "./Designer.js";
const developpeur = new Developpeur();
const designer = new Designer();
console.log(`Développeur : ${developpeur.travailler()} pour ${developpeur.getSalaire()}€`);
console.log(`Designer : ${designer.travailler()} pour ${designer.getSalaire()}€`);
