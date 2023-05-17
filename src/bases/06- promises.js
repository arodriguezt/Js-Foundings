import { getHeroById } from "./bases/05-imp-exp";

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("Heroe no existe");
      }
    }, 1000);
  });
};


 getHeroByIdAsync(2).then(h =>{console.log(`El heroe es: ${h.name}`)}).catch(console.log)