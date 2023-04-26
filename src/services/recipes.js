import { fetchAndParse } from "./utils";

export const headers = {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '167c3feaafmsh06c9ab957bc8d39p173897jsn84bf77b6b268',
    'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
  }

export function getAllRecipes(){
  return fetchAndParse("https://the-vegan-recipes-db.p.rapidapi.com/", {
  headers
  })
}

export function getRecipesByID(id){
   
    return fetchAndParse(`https://the-vegan-recipes-db.p.rapidapi.com/${id}`, {
    headers
    })
}
