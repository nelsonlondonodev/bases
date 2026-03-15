"use strict";
(() => {
    class Mutante {
        name;
        realNems;
        constructor(name, realNems) {
            this.name = name;
            this.realNems = realNems;
        }
    }
    class Xmen extends Mutante {
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    console.log(wolverine);
})();
//# sourceMappingURL=abstract.js.map