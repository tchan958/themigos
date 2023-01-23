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

// create a new post
function post () {
  var myHeaders = new Headers();
  const token = getLoginData() 
  console.log(token.token)
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", "Bearer " + token.token);
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    text: document.getElementById("capturepost").value,
  });
  
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
  }


  // display posts on profile page
  
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
    
    fetch("https://microbloglite.herokuapp.com/api/posts?limit=500&offset=0", requestOptions)
      .then(response => response.json())
      .then((result) => {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        document.getElementById("getpost").innerHTML = result.map(displaytemplate).join(" ")
  
    })
    .catch(error => console.log('error', error));
  } 
  displaypost();
function displaytemplate(post){
return `  
<div class="post">
<h2 class="username">${post.username}</h2>
<h3 class="text">${post.text}</h3>
<h4 class="time">${post.time}</h4>
</div>
`}
