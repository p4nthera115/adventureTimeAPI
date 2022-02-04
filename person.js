import fetch from "node-fetch";

async function getCharacter(id) {
  const url = "https://adventuretimeapi.herokuapp.com/people";

  const getPerson = await fetch(url + `/${id}`);
  const person = await getPerson.json();

  return person;
}

export default getCharacter;
