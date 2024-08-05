function showSkills() {
    setTimeout(function() {
        document.getElementById('skills').style.display = 'block';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('workExp').style.display = 'none';
      //  document.getElementById('skills').classList.remove('fade');
    }, 500);
}

function showProjects() {
    setTimeout(function() {
        document.getElementById('skills').style.display = 'none';
        document.getElementById('workExp').style.display = 'none';
        document.getElementById('projects').style.display = 'block';
      //  document.getElementById('projects').classList.remove('fade');
    }, 500);
}

function showWorkExp() {
     setTimeout(function() {
         document.getElementById('workExp').style.display = 'block';
         document.getElementById('projects').style.display = 'none';
         document.getElementById('skills').style.display = 'none';
     }, 500);
 }
// Function to show project details for a specific project
function showProjectDetails(projectId) {
    // Hide all project details
    var projectDetails = document.getElementsByClassName("project-details");
    for (var i = 0; i < projectDetails.length; i++) {
        projectDetails[i].style.display = "none";
    }

    // Show project details for the selected project
    var selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.style.display = "block";
    }
}

// Function to handle project button clicks
function showProject(projectId) {
    // Hide all project content
    var projects = document.getElementsByClassName("project");
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }

    // Show the selected project content
    var selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.style.display = "block";
    }
}

function toggleTheme() {
    var body = document.body;
    var themeButton = document.getElementById("theme-toggle");
    var linkedinImg = document.getElementById("linkedin-img");
    var githubImg = document.getElementById("github-img");
    var emailImg = document.getElementById("email-img");

    body.classList.toggle("dark-mode");
    themeButton.classList.toggle("dark-mode-button");

    if (body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
        linkedinImg.src = "linkedin-light.png"; // Change LinkedIn button image to light mode
        githubImg.src = "github-light.png"; // Change GitHub button image to light mode
        emailImg.src = "email-light.png"; // Change Email button image to light mode
        updateProjectButtonOutline("white"); // Update outline color to white for light mode
    } else {
        themeButton.textContent = "Dark Mode";
        linkedinImg.src = "linkedin-dark.png"; // Change LinkedIn button image to dark mode
        githubImg.src = "github-dark.png"; // Change GitHub button image to dark mode
        emailImg.src = "email-dark.png"; // Change Email button image to dark mode
        updateProjectButtonOutline("black"); // Update outline color to black for dark mode
    }
}

// Function to update the outline color of project buttons
function updateProjectButtonOutline(color) {
    var projectButtons = document.querySelectorAll(".project-button");
    projectButtons.forEach(function(button) {
        button.style.borderColor = color;
    });
}

// Call the toggleTheme function when the page loads to set the initial mode
toggleTheme();