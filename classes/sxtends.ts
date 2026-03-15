(() => {
  class Avengers {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log("Constructor Avenger llamado");
    }

    private getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }
})();
