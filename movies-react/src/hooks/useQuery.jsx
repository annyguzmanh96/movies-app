import { useLocation } from "react-router";

export function useQuery() { //hook propia para usar query para definir búsqueda
    return(
     new  URLSearchParams(useLocation().search) //react router query parameters, el useLocation() arroja un objeto con info del path 
    )
}