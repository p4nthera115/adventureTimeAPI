import fetch from "node-fetch";

async function getResident(url) {
  const result = await fetch(url);
  return await result.json();
}

export default getResident;
