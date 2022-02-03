import express from "express";
import fetch from "node-fetch";

async function character() {
  const url = "https://adventuretimeapi.herokuapp.com/people";
  
  const res = await fetch(url);
  const character = await res.json();

  const getPerson = await fetch(url + `/${character.id}`);
  const person = await getPerson.json();

  return person;
}

export default character = character()


