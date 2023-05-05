import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Recipe = ({recipe}) => {
    const {name, ingredients, method, rating, favorite} = recipe;
    
    const handleToast =() =>{
        toast("Wow Favorite!")
    }

    return (
        <div className='container'>
            <h4>{name}</h4>
            <p>{ingredients}</p>
            <p>{method}</p>
            <p><small>{rating}</small></p>
            <p><small>{favorite}</small></p>
            <button className='btn btn-info text-white' onClick={handleToast}>Favorite</button>
        </div>
    );
};

export default Recipe;