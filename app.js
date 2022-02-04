import express from "express";
import fetch from "node-fetch";
import getCharacter from "./person";

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index", { title: "Home" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
