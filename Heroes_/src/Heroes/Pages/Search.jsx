import React from 'react'
import { HeroeCard } from '../Components/HeroeCard'
import { useForm } from '../../Hook/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString  from 'query-string'
import { GetHeroesByName } from '../Helpers/GetHeroesByName'
export const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    const heroes = GetHeroesByName(q)
    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && heroes.length === 0;

    const {SearchText, onInputChange} = useForm({
        SearchText : q,
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (SearchText.trim().length <= 1) return;
        navigate(`?q=${SearchText}`)
        console.log({ SearchText });
    };


    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className='col-5'>
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input type="text" placeholder='Search a hero' className='form-control' name='SearchText' autoComplete='off' value={SearchText} onChange={onInputChange} />
                        <button className='btn btn-outline-primary mt-1'>Search</button>
                    </form>

                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    <div className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}>
                    No hero with <b>{ q }</b>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroeCard key={hero.id} {...hero}/>
                        ))
                    }
                    {/* <HeroeCard/> */}
                </div>

            </div>

        </>
    )
}
