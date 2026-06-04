document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    const today = new Date();
    // Array of day names
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Get the current day name
    const dayName = daysOfWeek[today.getDay()];

    // Get the element to display the message
    const messageElement = document.getElementById("day-of-week-message");

    // Update the element with the day-specific message
    switch (dayName) {
        case "Monday":
            messageElement.textContent = "It's Monday! New week, fresh start, let's go!";
            break;
        case "Tuesday":
            messageElement.textContent = "It's Tuesday! No one ever parties on Tuesdays!";
            break;
        case "Wednesday":
            messageElement.textContent = "Happy middle of the week! You've GOT this!";
            break;
        case "Thursday":
            messageElement.textContent = "It's Thursday! Stay hydrated!";
            break;
        case "Friday":
            messageElement.textContent = "Happy New-Music-Friday! Check if your fav artists dropped something cool!";
            break;
        case "Saturday":
            messageElement.textContent = "Have a great Saturday! You deserve it!";
            break;
        case "Sunday":
            messageElement.textContent = "It's Sunday! Don't worry, next week is gonna go better :3";
            break;
        default:
            messageElement.textContent = "I'm not sure if you're supposed to be reading this but have a great day!";
            break;
    }

    // Set the default section and active button
    showSection('homeSection', 'btn_main_1');

    // Add event listeners to buttons
    document.getElementById("btn_main_1").addEventListener("click", () => showSection("homeSection", "btn_main_1"));
    document.getElementById("btn_main_2").addEventListener("click", () => showSection("aboutSection", "btn_main_2"));
    document.getElementById("btn_main_3").addEventListener("click", () => showSection("musicSection", "btn_main_3"));
    document.getElementById("btn_main_4").addEventListener("click", () => showSection("artblogSection", "btn_main_4"));
    document.getElementById("btn_main_5").addEventListener("click", () => showSection("moreSection", "btn_main_5"));

    function showSection(sectionId, buttonId) {
        const sections = ["homeSection", "aboutSection", "musicSection", "artblogSection", "moreSection"];
        const buttons = ["btn_main_1", "btn_main_2", "btn_main_3", "btn_main_4", "btn_main_5"];
        // Hide all sections
        sections.forEach(id => {
            document.getElementById(id).style.display = "none";
        });
        // Remove active class from all buttons
        buttons.forEach(id => {
            document.getElementById(id).classList.remove("active-button");
        });
        // Show the selected section
        document.getElementById(sectionId).style.display = "block";
        // Add active class to the selected button
        document.getElementById(buttonId).classList.add("active-button");
    }
});