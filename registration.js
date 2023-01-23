const form = document.getElementById('registertrationForm')

function registerUser(event) {



 //commentupdate   event.preventDefault(); 

    console.log(document.getElementById("username").value)
    console.log(document.getElementById("password").value)
    console.log(document.getElementById("fullName").value)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "fullName": document.getElementById("fullName").value,
        
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://microbloglite.herokuapp.com/api/users", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
form.addEventListener('submit', function (e) {
    e.preventDefault() 
    registerUser()
})

// redirect button
let button = document.getElementById("signup");

button.addEventListener("click", function(){
    window.location.href = "/index.html";
});
