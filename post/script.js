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
