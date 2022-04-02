import fetch from "node-fetch";

async function getAllCharacters() {
  const url = "https://adventuretimeapi.herokuapp.com/people";
  const result = await fetch(url);

  return await result.json();
}

export default getAllCharacters;
