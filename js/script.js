// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-6-JS/sw.js", {
    scope: "/ICS20-Assignment-6-JS/",
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
    console.log(jsonData.url);
    document.getElementById("api-image").innerHTML =
      '<img src="' +
      jsonData.url +
      '" alt="Dog image" class="center" width="40%" ' +
      ">";
  } catch (err) {
    console.log(err);
  }
};
getImage("https://random.dog/woof.json");
