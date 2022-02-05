import fetch from "node-fetch";

async function getCharacter(id) {
  const url = "https://adventuretimeapi.herokuapp.com/people";

  const result = await fetch(url + `/${id ? id : ""}`);
  return await result.json();
}

// function getCharacter(id) {
//   const url = "https://adventuretimeapi.herokuapp.com/people";

//   return fetch(url + `/${id ? id : ""}`).then((result) => {
//     return result.json();
//   });
// }

export default getCharacter;
