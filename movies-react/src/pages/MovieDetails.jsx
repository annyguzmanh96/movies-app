import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { Spinner } from '../components/Spinner';
import {get} from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export function MovieDetails (){
    const { movieId } = useParams();
    const [movie, setMovie]= useState(null);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(() => {
        setIsLoading(true);

        get('/movie/'+ movieId).then((data)=>{
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieId]);
   
    if(isLoading){
        return(
       <Spinner />
       )
    }
    
    /*
    if(!movie){
        return null;
    }
    */

    const imgUrl= 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    return(
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImg}`} src={imgUrl} alt={movie.title} />
            <div className={`${styles.col}${styles.info}`}>
                <p><strong>Title:</strong> {movie.title  + '.'}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Genres:</strong> {movie.genres.map(genre=> genre.name).join(', ') + '.'}</p>
            </div>

        </div>
    )
}