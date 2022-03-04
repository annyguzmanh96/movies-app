import React, {useEffect, useState} from "react";
import { useQuery } from "../hooks/useQuery";
import {get} from '../utils/httpClient';
import { MovieCard } from "./MovieCard";
import styles from './MoviesGrid.module.css';


export function MoviesGrid() {

  const [movies, setMovies]= useState([]); //Estado del componente
  
  let query = useQuery()
  let search=query.get('search'); //Valor específico de búsqueda 
  console.log(search);

  useEffect(() => {
    let searchUrl= search? '/search/movie?query='+search : '/discover/movie'
    get(searchUrl).then((data) => {
      setMovies(data.results);
    })
    
  },[search]);

  return(
    <ul className={styles.moviesGrid}>
     {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)} 
     {/*Recorriendo el arreglo de objetos.json con info sobre películas*/}
    </ul>
    )
};
