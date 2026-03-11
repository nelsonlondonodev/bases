"use strict";
(() => {
    class Avengers {
        name;
        team;
        realName;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avengers("Antman", "Cap", "Scott Lang");
    console.log(antman);
})();
//# sourceMappingURL=basica.js.map