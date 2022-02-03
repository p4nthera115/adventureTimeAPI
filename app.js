import express from "express";
import fetch from "node-fetch";
// const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));
// app.use(morgan("dev"));

async function character() {
  const url = "https://adventuretimeapi.herokuapp.com/people";
  const res = await fetch(url);
  const character = await res.json();

  const getPerson = await fetch(url + `/r6Je`);
  const person = await getPerson.json();

  return person;
}
character()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
