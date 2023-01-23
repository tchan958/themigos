/* Posts Page JavaScript -- Shoutout Rose :) https://github.com/roseylikeme/ */ 

window.addEventListener("load", function(){
  displayUserPost();
  document.getElementById("postBtn").onclick = postBtnOnClick;
  const signoutBtn = document.getElementById("signoutBtn")

  signoutBtn.onclick = function () {
      logout();
  }
})

// Add more posts when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      displayUserPost();
  }
});

// Offset is 0, add to the offset
let offset = 0;
function addOffset() {
  offset += 5;
  return offset;
}

// Creates the cards
function displayCard(data) {
  document.getElementById("divForPost").innerHTML += `
    <div class="post">
<div class="post-header">
  <img src="profile.jpg" alt="User Profile Picture" class="profile-picture">
  <h4 class="username">${data.username}</h4>
</div>
<img src="post-image.jpg" alt="Post Image" class="post-image">
<p class="post-text">${data.text}</p>
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

// Displays the posts + Grabs from the API
function displayUserPost() { 
  let loginData = getLoginData()

  // document.getElementById("post").placeholder = `Welcome @` + loginData.username + ', care to share?';
  let postOutputList = document.getElementById("postOutputList")
  // postOutputList.innerHTML = "";

  // Fetch 5 at a time + 5 per load
  fetch(`https://microbloglite.herokuapp.com/api/posts?limit=5&offset=${addOffset()}`, {
      method: "GET", 
      headers: {"Authorization": `Bearer ${loginData.token}`,
              "Content-type":
              "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(data =>   {
      // How to Sort Data? -- Newest First
      // ! Downside: Takes a while to load the webpage... so much data.
      // for (let i = data.length-1; i>=0; i--) {
      //         displayCard(data[i]);
      //     }

      // Oldest First
      // ! Unfortunately have to go with this method for faster response
      for (let i = 0; i < data.length; i++) {
          displayCard(data[i]);
      }
  })
}

// When the airplane BTN is clicked POST to server
function postBtnOnClick() {
  let inputElement = document.getElementById('post');
  let textToPost = inputElement.value;
  let data = { text: textToPost };

  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${(loginData()).token}`
    },
  };

  fetch("https://microbloglite.herokuapp.com/api/posts", options)
    .then(response => {
      console.log(data)
      if (response.ok) {
        inputElement.value = '';
      //   setTimeout(function(){ location.reload(); }, 1000);
      }
    });
}

// Gets Login Data
function loginData() {
  let loginData = getLoginData();
  return loginData
}

// Date Converter
function monthDayYear(date) {
  let givenDate = new Date(date);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let day = givenDate.getDate();
  let month = months[givenDate.getMonth()];
  let year = givenDate.getFullYear();
  let hours = givenDate.getHours();
  let minutes = givenDate.getMinutes();

  if (hours <= 12){
      let monthDayYear = `${month} ${day}, ${year} at ${hours}:${minutes.toString(10).padStart(2, '0')} AM`
      return monthDayYear;
  }
  else {
      let monthDayYear = `${month} ${day}, ${year} at ${hours - 12}:${minutes.toString(10).padStart(2, '0')} PM`
      return monthDayYear;
  }
}