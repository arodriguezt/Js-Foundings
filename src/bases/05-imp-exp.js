//import {owners} from './data/heroes'
import heroes from "../data/heroes";


export const getHeroById = (id) => heroes.find(heroe => heroe.id ===id)
export const getHeroByOwner = (owner) => heroes.filter(heroe => heroe.owner ===owner)

/*
import { getHeroById, getHeroByOwner } from "./bases/05-imp-exp";

console.log(getHeroById(2));
console.log(getHeroByOwner('DC'));

*/ 

