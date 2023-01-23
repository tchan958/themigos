// This is the `logout()` function you will use for any logout button
// which you may include in various pages in your app. Again, READ this
// function and you will probably want to re-use parts of it for other
// `fetch()` requests you may need to write.
function logout () {
  const loginData = getLoginData();

  // GET /auth/logout
  const options = { 
      method: "GET",
      headers: { 
          // This header is how we authenticate our user with the
          // server for any API requests which require the user
          // to be logged-in in order to have access.
          // In the API docs, these endpoints display a lock icon.
          Authorization: `Bearer ${loginData.token}`,
      },
  };

  fetch(api + "/auth/logout", options)
      .then(response => response.json())
      .then(data => console.log(data))
      .finally(() => {
          // We're using `finally()` so that we will continue with the
          // browser side of logging out (below) even if there is an 
          // error with the fetch request above.

          window.localStorage.removeItem("login-data");  // remove login data from LocalStorage
          window.location.assign("/");  // redirect to landing page
      });
}
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

// LIKE AND DISLIKE BUTTON
var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count() {
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1() {
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}
// function createApost() {

//   const loginData = getLoginData()
//   console.log(loginData.token)
//   let myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer " + loginData.token);
//   myHeaders.append("Content-Type", "application/json");

//   let raw = JSON.stringify({
//     text: document.getElementById("postArea").value,
//   });
//   console.log(raw)

//   let requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
// //   };

//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//   document.getElementById("postArea").value = " ";
// }

// function listApost () {
//   const loginData = getLoginData()
//   console.log(loginData.token)
//   let myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer " + loginData.token);
//   myHeaders.append("Content-Type", "application/json");


// }**************

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

// Displays the posts + Grabs from the API ********
// function displayUserPost() { 
//   let loginData = getLoginData()

//   document.getElementById("post").placeholder = `Welcome @` + loginData.username + ', what do you want to write?';
//   let postOutputList = document.getElementById("postOutputList")
//   postOutputList.innerHTML = "";
//   fetch(`https://microbloglite.herokuapp.com/api/posts`, {
//     method: "GET", 
//     headers: {"Authorization": `Bearer ${loginData.token}`,
//             "Content-type":
//             "application/json; charset=UTF-8"}
// })
// .then(response => response.json())
// .then(data =>   {
//     for (let i = 0; i < data.length; i++) {
//         displayCard(data[i]);
//     }
// })
// }

// displayUserPost()
// function displaypost(){
//   let myHeaders = new Headers();  
//   let loginData= getLoginData();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Authorization", "Bearer " + loginData.token);
//   myHeaders.append("Content-Type", "application/json");

//   let raw = JSON.stringify({
//     text: document.getElementById("capturepost").value,
//   });

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,

//     redirect: 'follow'
//   };

//   fetch("https://microbloglite.herokuapp.com/api/posts?limit=500&offset=0", requestOptions)
//     .then(response => response.json())
//     .then((result) => {
//       result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//       document.getElementById("getpost").innerHTML = result.map(displaytemplate).join(" ")

//   })
//   .catch(error => console.log('error', error));
// } 
// displaypost();
// function displaypost(){
//   let myHeaders = new Headers();  
//   let loginData= getLoginData();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Authorization", "Bearer " + loginData.token);
//   myHeaders.append("Content-Type", "application/json");
  
//   let raw = JSON.stringify({
//     text: document.getElementById("capturepost").value,
//   });
  
//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
    
//     redirect: 'follow'
//   };
// fetch("https://microbloglite.herokuapp.com/api/posts?limit=500&offset=0", requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(post => {
//       const postElement = document.createElement('div');
//       itemElement.innerHTML = `  <div class="post">
//       <div class="post-header">
//         <img src="profile.jpg" alt="User Profile Picture" class="profile-picture">
//         <h4 class="username">username</h4>
//       </div>
//       <img src="post-image.jpg" alt="Post Image" class="post-image">
//       <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo a tincidunt congue, nulla est aliquet quam.</p>
//             <!-- LIKE AND DISLIKE BUTTONS-->
//     <div class="wrapper">
//       <div id="like">
//           <i onclick="count()" class="fas fa-heart icon"></i>
//           <br>
//           <input id="likeCount" type="number" value="0">
//       </div>
//       <div class="dislike">
//           <i onclick="count1()" class="fas fa-heart-broken icon"></i>
//           <br>
//           <input id="dislikeCount" type="number" value="0">
//       </div>
//     </div>
//       </div>`;
//       document.querySelector('#datacontainer').appendChild(postElement);
//     });
//   })
//   .catch(error => console.log(error));
// displaypost();
// }

// Creates the cards
// function displayCard(data) {
//   return `
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
function displaypost(){
  let myHeaders = new Headers();  
  let loginData= getLoginData();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", "Bearer " + loginData.token);
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    text: document.getElementById("capturepost").value,
  });
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    
    redirect: 'follow'
  };
// First, make sure you are correctly accessing the data from the API response
fetch("https://microbloglite.herokuapp.com/api/posts?limit=500&offset=0", requestOptions)
  .then(response => response.json())
  .then(data => {
    // Iterate over the data and create elements for each post
    data.forEach(post => {
      const postElement = document.createElement('div');
      // Use template literals to insert the data from the post into the HTML
      postElement.innerHTML = `
      <div class="post">
      <div class="post-header">
        <img src="${post.user.profile_image}" alt="User Profile Picture" class="profile-picture">
        <h4 class="username">${post.user.username}</h4>
      </div>
      <img src="${post.image}" alt="Post Image" class="post-image">
      <p class="post-text">${post.text}</p>
            <!-- LIKE AND DISLIKE BUTTONS-->
    <div class="wrapper">
      <div id="like">
          <i onclick="count()" class="fas fa-heart icon"></i>
          <br>
          <input id="likeCount" type="number" value="${post.likes}">
      </div>
      <div class="dislike">
          <i onclick="count1()" class="fas fa-heart-broken icon"></i>
          <br>
          <input id="dislikeCount" type="number" value="${post.dislikes}">
      </div>
    </div>
      </div>`;
      document.querySelector('#datacontainer').appendChild(postElement);
    });
  })
  .catch(error => console.log(error));
}
