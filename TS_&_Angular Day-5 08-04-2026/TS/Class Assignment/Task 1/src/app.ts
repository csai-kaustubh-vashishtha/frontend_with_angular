type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "Kaustubh",
  age: 21
};

let person: [number, string, User] = [22, "Kaustubh", u1];

console.log(person);