import "./styles/_normalize.scss";
import "./styles/main.scss";
import "./styles/fonts.scss";
//swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./pages/favorite/Favorite";
import { Error } from "./pages/eroor/Eroor";
import { RecipeInfo } from "./pages/recipeInfo/RecipeInfo";
import { About } from "./pages/about/About";
import { Header } from "./components/header/Header";
 

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/recipe/:id" element={<RecipeInfo/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
