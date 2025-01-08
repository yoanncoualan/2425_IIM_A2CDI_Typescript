var ExempleModule;
(function (ExempleModule) {
    // Utilisation du module 'UserInterface'
    const yoann = {
        firstname: "Yoann",
        lastname: "Coualan",
        birthdate: new Date("2000-06-22"),
        gender: "Male",
    };
    console.log(yoann);
})(ExempleModule || (ExempleModule = {}));
export {};
