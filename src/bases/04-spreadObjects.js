const person = {
  name: "Tony",
  age: 45,
  codeName: "Ironman",
};
const { age, name, codeName, power = "No tiene poder" } = person;

const createHero1 = ({ name, age, codeName, power }) => ({name,age,codeName,power,id:1123416523})

const createHero = ({ name, age, codeName, power }) => {
  return {
    id: 1123416523,
    name,
    age,
    codeName,
    power,
  };
};
console.log(createHero1(person));
