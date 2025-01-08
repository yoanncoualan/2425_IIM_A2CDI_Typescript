import { User } from "./class/User.js";
var ExempleClass;
(function (ExempleClass) {
    const yoann = new User("Yoann", "Coualan", new Date("2000-06-22"));
    console.log(yoann.get());
    const john = new User("John", "Doe");
    console.log(john.get());
})(ExempleClass || (ExempleClass = {}));
