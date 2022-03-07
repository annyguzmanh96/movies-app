import React, {useEffect, useState} from "react";
import { useQuery } from "../hooks/useQuery";
import {get} from '../utils/httpClient';
import { MovieCard } from "./MovieCard";
import { Spinner } from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './MoviesGrid.module.css';


export function MoviesGrid() {

  const [movies, setMovies]= useState([]); //Estado del componente-películas
  const [page, setPage]= useState(1); // páginas con películas-Para manejar scroll infinito
  const [hasMore, setHasMore]= useState(true);

  let query = useQuery();
  let search=query.get('search'); //Valor específico de búsqueda 
  //console.log(search)
  
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    setIsLoading(true);
    let searchUrl= search? '/search/movie?query='+search + '&page='+page : '/discover/movie?page='+page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies)=>prevMovies.concat(data.results));
      setHasMore(data.page<data.total_pages)
      setIsLoading(false);
    })
    
  },[search, page]);

  return(
    <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      hasMore={hasMore}
      next={()=>setPage((PrevPage)=>PrevPage+1)}
      loader= {<Spinner />}
      
    >
    <ul className={styles.moviesGrid}>
     {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)} 
     {/*Recorriendo el arreglo de objetos.json con info sobre películas*/}
    </ul>
    </InfiniteScroll>
    )
};
