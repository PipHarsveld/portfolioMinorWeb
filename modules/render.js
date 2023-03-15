// Import modules
import api from "./api.js"

const display = document.querySelector("main");
const container = document.querySelector("main>nav>a:nth-of-type(4)");
const nav = document.querySelector("main>nav");



function renderHome(data = []) {
    // Remove loading state
    display.textContent = "";

    if (data === "error") {
        display.textContent = "Something went wrong, please reload the page!";
        return false;
    } else {
        console.log(container);

        // Loop through each repository and create a new article element
        data.forEach((repo) => {
            const name = document.createElement("p");
            name.textContent = repo.name;
            console.log(name);
            container.appendChild(name);
        });

        display.appendChild(nav);
    }
}

//Export modules
export default {
    renderHome,
}
