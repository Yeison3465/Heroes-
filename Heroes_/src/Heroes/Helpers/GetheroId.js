import { heroes } from "../Data/Heroes"


export const GetheroId = (id) => {
    return heroes.find(hero => hero.id === id);
}
