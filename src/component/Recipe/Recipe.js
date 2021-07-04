import React from 'react'
import "./Recipe.css"

const Recipe = ({title,subtitle,img,type,ingredients}) => {
    return (
        <div className="recipe-card">
            <h3>Name: {title}</h3>
            <h4>MealType: {subtitle}</h4>
            <h4>Country: {type}</h4>
            <img src={img} alt="" />
            <ul>
                {
                    ingredients.map(ingredient => 
                        <li>{ingredient.text}</li>
                        )
                }
            </ul>
        </div>
    )
}

export default Recipe
