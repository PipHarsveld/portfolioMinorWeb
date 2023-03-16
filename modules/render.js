import api from "./api.js";

const display = document.querySelector("main");
const shelf3 = document.querySelector("main>nav>a:nth-of-type(3)");
const shelf4 = document.querySelector("main>nav>a:nth-of-type(4)");
const shelf5 = document.querySelector("main>nav>a:nth-of-type(5)");
const nav = document.querySelector("main>nav");
const container1 = document.createElement("section");
const container2 = document.createElement("section");

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
          container1.appendChild(name);
          shelf4.appendChild(container1);
        } else {
          // display the next 4 repositories on the 5th shelf
          container2.appendChild(name);
          shelf5.appendChild(container2);
        }
      });
  
      const image = document.createElement("img");
      const pictureFrame = document.createElement("div");
      image.src = info.avatar;
      pictureFrame.appendChild(image);
      shelf3.appendChild(pictureFrame);
  
      display.appendChild(nav);
    }
  }

export default {
  renderHome,
};
