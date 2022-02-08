import express from "express";
import getCharacter from "./character";

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).redirect("/home");
});
app.get("/home", (req, res) => {
  res.render("landing");
});

app.get("/characters", (req, res) => {
  getCharacter().then((result) => {
    res.render("characters", { title: "Characters", characters: result });
  });
});

app.get("/characters/:id", (req, res) => {
  const id = req.params.id;
  getCharacter(id).then((character) => {
    console.log(character);
    res.render("details", { title: character.name });
  });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
