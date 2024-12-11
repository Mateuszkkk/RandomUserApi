const btn = document.getElementById("btn");
function fetchRandomUser() {
    fetch("https://randomuser.me/api")
    .then(responce => responce.json())
    .then(data => dataReady(data))
}

function dataReady(data) {
    console.log(data);
    let result = data.results[0];

    let fullname = result.name.title + " " + result.name.first + " " + result.name.last;
    document.getElementById("full-name").innerHTML = fullname;
    
    let img = result.picture.large;
    document.getElementById("avatar-img").src = img;

    let username = result.login.username;
    document.getElementById("username").innerHTML = "<strong>@</strong>" + username;

    let email = result.email;
    document.getElementById("e-mail").innerHTML = "<strong>E-MAIL: </strong>" + email.italics();
    let country = result.location.timezone.description;
    let city = result.location.city;
    document.getElementById("country").innerHTML = "<strong>FROM: </strong>" + country.italics() + ", " + city.italics();
    let gender = result.gender;
    document.getElementById("gender").innerHTML = "<strong>" + gender.toUpperCase() + "</strong>";
    let phone = result.phone;
    document.getElementById("phone").innerHTML = "<strong>contact number: </strong>" + phone.italics();





}

btn.addEventListener("click", fetchRandomUser);

        
window.onload = fetchRandomUser;