"use strict";
(() => {
    class Avengers {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
})();
//# sourceMappingURL=sxtends.js.map