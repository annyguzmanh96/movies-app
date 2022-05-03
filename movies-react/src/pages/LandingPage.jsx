//Página principal o Home, tiene toda la grilla de películas
import React from 'react';
import {MoviesGrid} from '../components/MoviesGrid';
import { Search } from '../components/Search';
import { useQuery } from '../hooks/useQuery';

export function LandingPage(){
    let query = useQuery();
    let search=query.get('search'); //Valor específico de búsqueda 
    return(
        <div>
            <Search/>
            <MoviesGrid key={search}/>
        </div>
    )
}