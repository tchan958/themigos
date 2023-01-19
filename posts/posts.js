/* Posts Page JavaScript */

"use strict";
// NAVBAR
let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    let target = event.target;
    let targetHref = target.getAttribute("href");
    let targetSection = document.querySelector(targetHref);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// SEARCH BAR
let searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-input");
  let searchTerm = searchInput.value;
  console.log("Searching for: " + searchTerm);
  // Perform search here (e.g. send search term to a server)
});

// LIKE AND DISLIKE BUTTON
var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count(){
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1(){
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}
function createApost () {

    const token = getLoginData() 
    console.log(token.token)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "{\n    \"we are working hard\"\n}";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDE1MTkzOCwiZXhwIjoxNjc0MjM4MzM4fQ.ijV8d9LNQjaCYTYvF2Kc3n1LTGw38gmjmVO5XvvR_9k");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"text":"hello does this work?"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

// NAVBAR
let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    let target = event.target;
    let targetHref = target.getAttribute("href");
    let targetSection = document.querySelector(targetHref);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// SEARCH BAR
let searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-input");
  let searchTerm = searchInput.value;
  console.log("Searching for: " + searchTerm);
  // Perform search here (e.g. send search term to a server)
});

// LIKE AND DISLIKE BUTTON
var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count(){
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1(){
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}

var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDE1MTkzOCwiZXhwIjoxNjc0MjM4MzM4fQ.ijV8d9LNQjaCYTYvF2Kc3n1LTGw38gmjmVO5XvvR_9k");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"text":"hello does this work?"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));