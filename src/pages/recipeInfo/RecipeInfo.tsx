import React from "react";
import { useParams } from "react-router-dom";

export const RecipeInfo: React.FC = () => {
  const { id } = useParams();

  console.log(id);
  return <div>RecipeInfo {id}</div>;
};
