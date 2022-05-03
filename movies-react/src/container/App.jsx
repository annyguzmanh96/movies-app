//Entry Point-Archivo de entrada: Aquí tienen lugar todas las páginas con sus respectivas rutas
//Desde aquí fluye la info hacia abajo y luego empiezan a subir los eventos (lifecycle)
import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"; // Esta es la V5, ya existe la V6 que es más sencilla-Usada en posteriores proyectos-Revisar app-clima
import { LandingPage } from '../pages/LandingPage';
import {MovieDetails} from '../pages/MovieDetails';
import styles from './App.module.css';


export function App(){
    //.....
    return(
        <Router>
        <div>
            <header>
               <Link to='/'><h1 className={styles.title}> Movies </h1> </Link> 

            </header>
            <main>
               
                    <Switch>
                        <Route exact path="/movies/:movieId">
                            <MovieDetails />
                        </Route>
                        <Route path="/">
                           <LandingPage />
                        </Route>
                    </Switch>
            </main>
        </div>
        </Router>
    )
};