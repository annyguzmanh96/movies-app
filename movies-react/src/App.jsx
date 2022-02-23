//Entry Point-Archivo de entrada
//Desde aquí fluye la info hacia abajo y luego empiezan a subir los eventos (lifecycle)
import React from 'react';
import { MoviesGrid } from './MoviesGrid';
import styles from './App.module.css';

export function App(){
    //.....
    return(
        <div>
            <header>
                <h1 className={styles.title}> Movies </h1>
            </header>
            <main> 
                <MoviesGrid />
            </main>
        </div>
    )
};