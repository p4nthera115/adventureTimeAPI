import express, { response } from "express";
import fetch from "node-fetch";
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
    res.render("characterDetails", { title: character.name, character });
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
    console.log(place);

    const rulers = place.rulers;

    const rulersRequests = rulers.map((rulerID, i) => {
      const ID = rulerID.substr(rulerID.length - 4);
      return getCharacter(ID);
    });

    const residents = place.residents;

    const residentsRequests = residents.map((residentID, i) => {
      const ID = residentID.substr(residentID.length - 4);
      return getCharacter(ID);
    });

    Promise.all(residentsRequests).then((residents) => {
      residents.map((residents) => {
        return residents;
      });

      Promise.all(rulersRequests).then((rulers) => {
        rulers.map((rulers) => {
          return rulers;
        });
        return res.render("placeDetails", {
          place,
          residents,
          rulers,
        });
      });
    });
  });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
