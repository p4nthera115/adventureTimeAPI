import express from "express";
import fetch from "node-fetch";
import character from "./person";

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));

character
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
