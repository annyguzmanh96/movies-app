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
  const [hasMore, setHasMore]= useState(true); //Estado para verificar si hay más películas en la API para cargar en la grilla

  let query = useQuery(); /*Hook propia creada con Query Parameters de react-router-dom para actualizar URL y luego poder tomar
  dichos parámetros del path y luego poder usarlos para hacer llamadas a la API*/
  let search=query.get('search'); //Valor específico de búsqueda 
  console.log(search)
  
  const [isLoading, setIsLoading]= useState(true); //Estado para mostrar en pantalla un spinner si los datos de la API están en porceso de carga 

  useEffect(() => { /*Promesa //UseEffect para poder ejecutar acciones sincrónicas, permite llevar a cabo efectos secundarios en componentes funcionales
    y se ejecuta cuando React renderiza nuestro componente, recordará este efecto y lo ejecutará después de actualizar el DOM.*/
    setIsLoading(true); //Para mostrar spinner en pantalla mientras carga la data solicitada
    let searchUrl= search? '/search/movie?query='+search + '&page='+page : '/discover/movie?page='+page; //Acorde a documentación de la API
    get(searchUrl).then((data) => {
      setMovies((prevMovies)=>prevMovies.concat(data.results));
      setHasMore(data.page<data.total_pages) //nombres acorde a la info que te arroja la API, Si se cumple la condiciòn entonces True
      setIsLoading(false);
    })
    
  },[search, page]); //Si se deja sin arreglo de dependecias estará constantemente ejcutandóse este efecto
                     //Si se sitúa aquí un arreglo de dependecias vacío, se ejecutará 1 sóla vez luego del renderizado y cargue del componente en el DOM
                     //Si se sitúa aquí un arreglo de dependecias con ciertos parámetros específicos se ejecutará tantas veces éstos se actualicen 

  return(
    <InfiniteScroll //Scroll Infinito-Definido acorde a react-infinite-scroll-component
      dataLength={movies.length} //This is important field to render the next data - Porque dependiendo de esto se seguirá cargando la grilla con nuevas películas de la API
      hasMore={hasMore} // Si està en true, sigue cargando más movies
      next={()=>setPage((PrevPage)=>PrevPage+1)} //Page es la anterior página +1 para ubicarnos en los sgts datos
      loader= {<Spinner />} //Mierntras cargan los datos el loader es el spinner
      
    >
    <ul className={styles.moviesGrid}>
     {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)} {/*React por defecto solicita un valor de key dinámico para cada item de una lista*/}
     {/*Recorriendo el arreglo de objetos.json con info sobre películas, .map genera un nuevo arreglo con lo indicado en las instrucciones*/}
    </ul>
    </InfiniteScroll>
    )
};
