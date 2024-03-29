import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe';

const ChefRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://endless-chef-table-server-tauft-aolcom.vercel.app/recipe')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.error(error))
    }, [])

//   const {id} = useParams();
//   const recipes = useLoaderData();


    return (
        <div>
           {
            recipes.map(recipe => <Recipe
            key={recipe.id}
            recipe={recipe}></Recipe>)
           }
        </div>
    );
};

export default ChefRecipes;