
import './App.css';
import {useEffect, useState, useRef} from "react";

function App() {
  const [ingredientList, updateIngredientList] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const API_KEY = "7714138714b74de48a0e40101285c424";
  const API_ID = "40fc4687";

    const search = () => {
      searchForRecipe(inputRef.current.value);
      inputRef.current.value = "";
    }

  const searchForRecipe = (query) => {
    setLoading(true);
    let url = `search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    fetch(url, {mode:"no-cors"})
    .then(response => {
      return response.json()
    })
    .then(res => {
      
     updateIngredientList(res.hits);
     setLoading(false);
    })
    .catch((err) =>{ 
      console.log("error", err)
      setLoading(false);
    })
  
  }
  
  useEffect(()=> {
    //edamam => dashboard
    searchForRecipe("chicken");
  }, []);
  
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="InputWrapper">
          <input
           ref={inputRef}
           placeholder="Search for recipe"
          />
          <button onClick={search}>Search</button>
        </div>
       {loading && <p>Loading...</p>}
        <div className="Wrapper">
           {ingredientList.map(({recipe}) => {
             const {label, image, ingredientLines} = recipe
             return(
               <div key={label} className="Ingredient">
                 <span>{label}</span>
                 <img src={image} />
                 <div className="Steps">
                 {ingredientLines.map((step, index) => <p key={index}>{step}</p> )}
                 </div>
               </div>
             )
           })}
        </div>
      </header>
    </div>
  );
}

export default App;
