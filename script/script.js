const user1 = "CodersBay";
const user1pw = "cbpw123";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;

    if (username === user1 && password === user1pw) {
        window.location.href = "../index.html";
    } else {
        alert("Invalid username or password");
    }
});


