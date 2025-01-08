"use strict";
var ExempleInterface;
(function (ExempleInterface) {
    // Création d'un objet avec l'interface
    const yoann = {
        firstname: "Yoann",
        lastname: "Coualan",
        birthdate: new Date("2000-06-22"),
    };
    console.log(`${yoann.firstname} ${yoann.lastname}`);
    const john = {
        firstname: "John",
        lastname: "Doe",
    };
})(ExempleInterface || (ExempleInterface = {}));
