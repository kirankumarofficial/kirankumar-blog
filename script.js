// Mobile Menu

function toggleMenu() {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");
}


function closeMenu() {
    const navbar = document.getElementById("navbar");

    navbar.classList.remove("active");
}


// Dark Mode

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}


// Keep Dark Mode after Refresh

window.onload = function () {

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
    }

};


// Blog Search

function searchBlogs() {

    const searchText =
        document.getElementById("searchBlog").value.toLowerCase();

    const blogs =
        document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        const content =
            blog.innerText.toLowerCase();

        if (content.includes(searchText)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }

    });

}


// Read Blog

function readBlog(blogName) {

    alert(
        "You selected the blog: " +
        blogName +
        "\n\nFull blog content can be added here."
    );

}


// Project Button

function showProject(projectName) {

    alert(
        "Project: " +
        projectName +
        "\n\nProject details can be added here."
    );

}


// Contact Form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {

            alert("Please fill in all the fields.");

            return;
        }


        alert(
            "Thank you, " +
            name +
            "!\n\nYour message has been submitted on the frontend."
        );


        this.reset();

    });