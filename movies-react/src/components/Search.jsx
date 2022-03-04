import React, {useState} from 'react';
import style from '../components/Search.module.css'
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';


export function Search(){
    const [searchingText, setSearchingText]= useState('');
    const history = useHistory();
    const handleSubmit= (e)=>{
        e.preventDefault(); //Ya que estamos trabjando una SPA (Single Page Aplication)
        history.push('/?search='+searchingText)
    }

    return(
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <button type='submit' className={style.searchButton}> <FaSearch size={20}/> </button>
                <input 
                    type='text' 
                    placeholder='Search...' 
                    className={style.searchInput} 
                    value={searchingText} 
                    onChange= {
                        (e)=>setSearchingText(e.target.value.toUpperCase())
                    }
                />
            </div>
        </form>
        
    )

}