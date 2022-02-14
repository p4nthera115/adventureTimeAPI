import express from "express";
import getCharacter from "./getCharacter";
import getPlaces from "./getPlaces";

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).redirect("/home");
});
app.get("/home", (req, res) => {
  res.render("landing", { title: "Home" });
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
    res.render("characterDetails", { title: character.name });
  });
});

app.get("/places", (req, res) => {
  getPlaces().then((result) => {
    res.render("places", { title: "Places", places: result });
  });
});
app.get("/places/:id", (req, res) => {
  const id = req.params.id;
  getPlaces(id).then((place) => {
    res.render("placeDetails", { title: place.name });
  });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
