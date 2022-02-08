import fetch from "node-fetch";

const url = "https://adventuretimeapi.herokuapp.com/places";

const getPlaces = async (id) => {
  const result = await fetch(url + `/${id ? id : ""}`);
  return await result.json();
};

export default getPlaces;
