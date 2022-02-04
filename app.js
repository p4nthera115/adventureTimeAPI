import express from "express";
import getCharacter from "./person";

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/characters/:id", (req, res) => {
  const id = req.params.id;
  getCharacter(id).then((result) => {
    console.log(result);
    res.render("details");
  });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
