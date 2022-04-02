import getAllCharacters from "../getAllCharacters";

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});

getAllCharacters().then((characters) => {
  console.log(characters);
});