"use strict";
var Exemple_in;
(function (Exemple_in) {
    const yoann = {
        firstname: "Yoann",
        lastname: "Coualan",
        birthdate: new Date("2000-06-22"),
    };
    console.log("id in yoann ?", "id" in yoann); // false
    console.log("firstname in yoann ?", "firstname" in yoann); // true
})(Exemple_in || (Exemple_in = {}));
