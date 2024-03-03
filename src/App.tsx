import "./styles/_normalize.scss";
import "./styles/main.scss";
import "./styles/fonts.scss";
import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./pages/favorite/Favorite";
import { Error } from "./pages/error/Error";
import { RecipeInfo } from "./pages/recipeInfo/RecipeInfo";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Favorite />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/recipe/:id" element={<RecipeInfo/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
