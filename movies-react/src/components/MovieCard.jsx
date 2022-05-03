//Archivo de tarjeta de cada película 
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css'; //Esto forma un objeto on los estilos específicos para el componente en el cual se importen

export function MovieCard ({movie}){ //Se pasa por destructuring, ya que lo tiene MovieCard como atributo del componente en MoviesGrid
    console.log(styles);
    const imgUrl= 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    return(
        <li className={styles.movieCard}>
            <Link to={'/movies/'+ movie.id}> {/* Esto se puede debido a que en las rutas creadas en el entry point, se definió este path con :movieId como path dinámico*/}
                <img src={imgUrl} alt={movie.title} className={styles.movieImage}/> {/*Portada de la película*/}
                <div className={styles.movieTitle}>{movie.title}</div> {/*Título de la película*/}
            </Link>
        </li>
       
    )
}