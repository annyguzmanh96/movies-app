import { useLocation } from "react-router";

export function useQuery() { //hook propia para usar query para definir búsqueda
    //eso es para actualizar la ruta de URL con los query de búsqueda

    return(
     new  URLSearchParams(useLocation().search) //react router query parameters, el useLocation() arroja un objeto con info del path cuyo propiedad search posee como valores los query de búsqueda
     //ejemplo de lo que devuelve uselocation {pathname: '/', search: '?search=BEBE', hash: '', state: undefined, key: 'my67q2'}
    )
}
    