import { heroes } from "../Data/Heroes";


export const GetHeroesByPublisher = (publisher) => {
    
    const  validpublisher = ['DC Comics', 'Marvel Comics']
    if (!validpublisher.includes(publisher)) {
        throw new Error(`Invalid publisher ${publisher}`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}
