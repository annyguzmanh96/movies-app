import React, {useEffect, useState} from "react";
import {get} from '../utils/httpClient';
import { MovieCard } from "./MovieCard";
import styles from './MoviesGrid.module.css';
import { useLocation } from "react-router";

export function MoviesGrid() {

  const [movies, setMovies]= useState([]); //Estado del componente
  
  function useQuery() {
    return( new  URLSearchParams(useLocation().search));
  }

  let query = useQuery();
  let search=query.get('search'); //Valor específico de búsqueda
  console.log(search);

  useEffect(() => {
    get('/discover/movie').then((data) => {
      setMovies(data.results);
    })
    
  },[]);

  return(
    <ul className={styles.moviesGrid}>
     {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)} 
     {/*Recorriendo el arreglo de objetos.json con info sobre películas*/}
    </ul>
    )
};
