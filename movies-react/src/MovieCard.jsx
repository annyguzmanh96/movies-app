import React from 'react';
import styles from './MovieCard.module.css';

export function MovieCard ({movie}){
    console.log(styles);
    const imgUrl= 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    return(
        <li className={styles.movieCard}>
            <img src={imgUrl} alt={movie.title} className={styles.movieImage}/> {/*Portada de la película*/}
            <div className={styles.movieTitle}>{movie.title}</div> {/*Título de la película*/}
        </li>
       
    )
}