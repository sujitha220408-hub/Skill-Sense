function startAssessment() {

    window.location.href = "user-details.html";

}



function beginInterview() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const education = document.getElementById("education").value.trim();

    if (name === "" || email === "" || education === "") {
        alert("Please fill all the details.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userEducation", education);

    window.location.href = "skill.html";
}

function saveUserDetails() {

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("userName", name);

    window.location.href = "index.html";
}

