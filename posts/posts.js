/* Posts Page JavaScript */  "use strict"; // NAVBAR let navLinks = document.querySelectorAll("nav a");  navLinks.forEach(function (link) {   link.addEventListener("click", function (event) {     event.preventDefault();     let target = event.target;     let targetHref = target.getAttribute("href");     let targetSection = document.querySelector(targetHref);     targetSection.scrollIntoView({ behavior: 'smooth' });   }); }); // SEARCH BAR let searchButton = document.getElementById("search-button"); searchButton.addEventListener("click", function (event) {   event.preventDefault();   let searchInput = document.getElementById("search-input");   let searchTerm = searchInput.value;   console.log("Searching for: " + searchTerm);   // Perform search here (e.g. send search term to a server) });  // LIKE AND DISLIKE BUTTON var likeCount = document.querySelector('#likeCount'); var dislikeCount = document.querySelector('#dislikeCount');  function count() {   likeCount.value = parseInt(likeCount
/* Posts Page JavaScript */

"use strict";
// NAVBAR
let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let target = event.target;
    let targetHref = target.getAttribute("href");
    let targetSection = document.querySelector(targetHref);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// SEARCH BAR
let searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-input");
  let searchTerm = searchInput.value;
  console.log("Searching for: " + searchTerm);
  // Perform search here (e.g. send search term to a server)
});

// LIKE AND DISLIKE BUTTON
var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count() {
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1() {
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}
function createApost() {

  const loginData = getLoginData()
  console.log(loginData.token)
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + loginData.token);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    text: document.getElementById("postArea").value,
  });
  console.log(raw)

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  document.getElementById("postArea").value = " ";
}

function listApost () {
  const loginData = getLoginData()
  console.log(loginData.token)
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + loginData.token);
  myHeaders.append("Content-Type", "application/json");


}

// // Creates the cards
// function displayCard(data) {
//   document.getElementById("divForPost").innerHTML += `
//   <div class="post">
//   <div class="post-header">
//     <img src="profile.jpg" alt="User Profile Picture" class="profile-picture">
//     <h4 class="username">username</h4>
//   </div>
//   <img src="post-image.jpg" alt="Post Image" class="post-image">
//   <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo a tincidunt congue, nulla est aliquet quam.</p>
//         <!-- LIKE AND DISLIKE BUTTONS-->
// <div class="wrapper">
//   <div id="like">
//       <i onclick="count()" class="fas fa-heart icon"></i>
//       <br>
//       <input id="likeCount" type="number" value="0">
//   </div>
//   <div class="dislike">
//       <i onclick="count1()" class="fas fa-heart-broken icon"></i>
//       <br>
//       <input id="dislikeCount" type="number" value="0">
//   </div>
// </div>
//   </div>
//   `;
// }

// Displays the posts + Grabs from the API
function displayUserPost() { 
  let loginData = getLoginData()

  document.getElementById("post").placeholder = `Welcome @` + loginData.username + ', what do you want to write?';
  let postOutputList = document.getElementById("postOutputList")
  postOutputList.innerHTML = "";
  fetch(`https://microbloglite.herokuapp.com/api/posts`, {
    method: "GET", 
    headers: {"Authorization": `Bearer ${loginData.token}`,
            "Content-type":
            "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(data =>   {
    for (let i = 0; i < data.length; i++) {
        displayCard(data[i]);
    }
})
}

displayUserPost()

// Creates the cards
function displayCard(data) {
  return`
  <div class="post">
  <div class="post-header">
    <img src="profile.jpg" alt="User Profile Picture" class="profile-picture">
    <h4 class="username">username</h4>
  </div>
  <img src="post-image.jpg" alt="Post Image" class="post-image">
  <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo a tincidunt congue, nulla est aliquet quam.</p>
        <!-- LIKE AND DISLIKE BUTTONS-->
<div class="wrapper">
  <div id="like">
      <i onclick="count()" class="fas fa-heart icon"></i>
      <br>
      <input id="likeCount" type="number" value="0">
  </div>
  <div class="dislike">
      <i onclick="count1()" class="fas fa-heart-broken icon"></i>
      <br>
      <input id="dislikeCount" type="number" value="0">
  </div>
</div>
  </div>
  `;
}