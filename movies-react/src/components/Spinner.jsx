import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import style from '../components/Spinner.module.css';


export function Spinner(){
    return (
        <div className={style.spinner} >
            <FaSpinner className={style.spinning} size='70'/>
            <p>Loading</p>
        </div>
    )
}