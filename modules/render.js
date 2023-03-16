import api from "./api.js";

const display = document.querySelector("main");
const shelf3 = document.querySelector("main>nav>a:nth-of-type(3)");
const shelf4 = document.querySelector("main>nav>a:nth-of-type(4)");
const shelf5 = document.querySelector("main>nav>a:nth-of-type(5)");
const nav = document.querySelector("main>nav");

async function renderHome(repos) {
    // Remove loading state
    display.textContent = "";
  
    const info = await api.getUserInfo();
    if (info === "error") {
      display.textContent = "Something went wrong, please reload the page!";
      return false;
    } else {
      // Loop through each repository and create a new article element
      repos.forEach((repo, index) => {
        const name = document.createElement("p");
        name.textContent = repo.name;
        console.log(name);
        if (index < 5) {
          // display the first 5 repositories on the 4th shelf
          shelf4.appendChild(name);
        } else {
          // display the next 4 repositories on the 5th shelf
          shelf5.appendChild(name);
        }
      });
  
      const image = document.createElement("img");
      image.src = info.avatar;
      shelf3.appendChild(image);
  
      display.appendChild(nav);
    }
  }

export default {
  renderHome,
};
