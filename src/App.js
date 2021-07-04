import Recipe from './component/Recipe/Recipe';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const APP_ID = 'da532ef1';
  const APP_KEY = 'f07fee7f65ddfae4d986c88f8503bb93';
  
  let [recipes , setRecipes] = useState([]);
  console.log(recipes);
  let [search,setSearch] = useState('');
  let [query,setQuery] = useState('chicken')

    useEffect(() => {
      fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
  },[query]);


  const updateSearch = event => {
  setSearch( event.target.value);
  }

  const getSearch = event =>{
    event.preventDefault();
    setQuery(search)
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" placeholder="Search recipies..." value={search} onChange={updateSearch} />
        <button type="submit" className="search-btn">Search Here</button>
      </form>
      <div className="recipes-con">
        {
          recipes.map((recipe, index) => <Recipe 
            key={index} 
            title={recipe.recipe.label} 
            subtitle={recipe.recipe.mealType} 
            type={recipe.recipe.cuisineType}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />)
        }
      </div>
    </div>
  );
}

export default App;
