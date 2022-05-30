// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-03-JS/sw.js", {
    scope: "/ICS20-Unit-6-03-JS/",
  });
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

/**
 * Get API info.
 */
const getImage = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress);
    const jsonData = await request.json();
    const image = image;

    console.log(jsonData.image);
    document.getElementById("api-image").innerHTML =
      "<img src='https://image.tmdb.org/t/p/" +
      image +
      "@2x.png' alt='Weather Icon' width='10%'><br><h5>";
    (">");

  } catch (err) {
    console.log(err);
  }
};
getImage(
  "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
);
