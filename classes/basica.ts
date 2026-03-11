(() => {
  class Avengers {
    private name: string;
    public team: string;
    public realName: string;

    constructor(name: string, team: string, realName: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avengers = new Avengers("Antman", "Cap", "Scott Lang");
  console.log(antman);
})();
