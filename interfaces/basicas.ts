(() => {
  type hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  let superMan: hero = {
    name: "Clark Kent",
    age: 24,
    powers: ["Super velocidad"],
  };
})();
