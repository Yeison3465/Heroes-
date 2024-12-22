import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const Imagen = `/Assets/Heroes__/${id}.jpg`
    console.log(Imagen)
    return (
            <div className="row animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4 ">
                            <img 
                                src={Imagen} 
                                alt={superhero}  
                                className="img-fluid rounded-lg shadow-sm"
                            />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className='Card-title'>{ superhero }</h5>
                                <p className='Card-text'>{alter_ego}</p>
                                {
                                    (alter_ego !== characters) && (<p>{characters}</p>)
                                }
                                

                                <p className='Card-text'>
                                    <small className='text-muted'>{first_appearance}</small>
                                </p>
                                <Link to={`/hero/${id}`}>
                                    Mas informacion
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    )
}
