import React from 'react'
import { Billboard } from '../../components/billboard/Billboard';
import { RecipeList } from '../../components/recipeList/RecipeList';

export const Home: React.FC = React.memo(() => {

  return (
    <>
      <Billboard/>
      <RecipeList/>
    </>
  )
}) 
