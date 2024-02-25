import React from 'react'
import { Header } from '../../components/header/Header';
import { Billboard } from '../../components/billboard/Billboard';
import { RecipeList } from '../../components/recipeList/RecipeList';

export const Home: React.FC = () => {
  return (
    <>
    {/* <div>Real Food Doesn't Have Ingredients, Real Food Is Ingredients. -Jamie Oliver</div> */}
      <Header/>
      <Billboard/>
      <RecipeList/>
    </>
  )
}
