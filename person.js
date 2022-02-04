import express from "express";
import fetch from "node-fetch";

async function getCharacter() {
  const url = "https://adventuretimeapi.herokuapp.com/people";

  const getPerson = await fetch(url + `/r6Je`);
  const person = await getPerson.json();

  return person;
}

// const Details = ({ person }) => {
//   return (
//     <div>
//       <h1>{person.name}</h1>
//       <p>{person.fullname}</p>
//       <p>{person.gender}</p>
//     </div>
//   );
// };

export default getCharacter;
