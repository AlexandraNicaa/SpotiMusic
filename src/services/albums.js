import { BASE_URL } from "./utils";

export const headers = {
  'content-type': 'application/octet-stream',
  'X-RapidAPI-Key': '167c3feaafmsh06c9ab957bc8d39p173897jsn84bf77b6b268',
  'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }

export function getAllAlbums(id){
  return fetchAndParse(`https://api.spotify.com/v1/albums/{id}`, {
  headers
  })
}

export function getAllArtists(id){
    return fetchAndParse(`${BASE_URL}/artists/{id}`, {
    headers
    })
}
