import React, { useEffect, useState } from 'react';

const ChefRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                recipes.map(recipe => <p>{recipe.name}</p>,
                <p>{recipe.likes}</p>
                )
            }
        </div>
    );
};

export default ChefRecipes;