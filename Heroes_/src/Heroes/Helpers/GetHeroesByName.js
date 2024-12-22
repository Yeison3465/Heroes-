import { heroes } from "../Data/Heroes";
import { Hero } from "../Pages/Hero";


export const GetHeroesByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) {
        return [];
    }

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )

}
