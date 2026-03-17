(() => {
  interface Client {
    name: string;
    age?: number;
    address?: {
      id: number;
      zip: string;
      city: string;
    };
  }

  const client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
  };

  const client2: Client = {
    name: "Melisa",
    age: 30,
  };

  console.log(client2.name);
})();
