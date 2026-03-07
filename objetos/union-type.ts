(() => {
  type hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | hero = "Fernanod";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;

  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
})();
