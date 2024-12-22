import React, { useMemo } from 'react'
import { GetHeroesByPublisher } from '../Helpers/GetHeroesByPublisher'
import { HeroeCard } from './HeroeCard'
import { heroes } from '../Data/Heroes'

export const HeroeList = ({publisher}) => {

    const Heroes = useMemo(()=>GetHeroesByPublisher(publisher),[publisher]); 
    return (
        <div className='row rows-col-1 row-cols-md-3 g-3'>
            {
                Heroes.map(hero =>(
                    <HeroeCard key={hero.id}
                    {...hero}
                    />
                ))
            }
        </div>
    )
}
