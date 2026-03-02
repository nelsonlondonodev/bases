"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salavado`;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log("Hola fernando");
    myFunction = saveTheWorld;
    console.log(saveTheWorld);
})();
//# sourceMappingURL=function-type.js.map