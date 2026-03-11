(() => {
  type Avengers = {
    name: string;
    weapon: string;
  };

  const ironman: Avengers = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  const capitanAmerica: Avengers = {
    name: "Capitán Americá",
    weapon: "Escudo",
  };

  const thor: Avengers = {
    name: "Thor",
    weapon: "Mjorlin",
  };

  const avengers = [ironman, thor, capitanAmerica];
})();
