function selectSkill(skill) {

    // Store selected skill
    localStorage.setItem("selectedSkill", skill);

    // Move to assessment page
    window.location.href = "welcome.html";
}