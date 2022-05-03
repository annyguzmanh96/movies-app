
/*Función para consumir la API "The movie db" , esta función recibe como parámetro un path 
(definidos por la API acorde a la info requerida) para completar la url que tiene como constante
y devuelve la response convertida en json*/

const API='https://api.themoviedb.org/3';

export function get(path){
  return (fetch(API+path,
    {headers: {
      Authorization: 
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODQwNGFmZWIzOTYxMGQ5ZWMwOTAzZWJlNGZlZmI5YiIsInN1YiI6IjYyMThkNDBlN2I3YjRkMDA0Mjc0ZTg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IrFwQNTNyxrm6-VorSA-Z5qPELM0DgS9FoG5NOyINXo',
        'Content-Type': 
        'application/json;charset=utf-8',
    }}).then(response => response.json())  
  )
}