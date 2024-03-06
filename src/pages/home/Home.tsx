import React from 'react'
import { Header } from '../../components/header/Header';
import { Billboard } from '../../components/billboard/Billboard';
import { RecipeList } from '../../components/recipeList/RecipeList';

export const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <Billboard/>
      <RecipeList/>
    </>
  )
}
