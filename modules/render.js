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
      if (index < 5) {
        // display the first 5 repositories on the 4th shelf
        container1.appendChild(name);
      } else {
        // display the next 4 repositories on the 5th shelf
        container2.appendChild(name);
      }
    });

    // Append containers to shelves
    shelf4.appendChild(container1);
    shelf5.appendChild(container2);

    const image = document.createElement("img");
    const pictureFrame = document.createElement("div");
    image.src = info.avatar;
    pictureFrame.appendChild(image);
    shelf3.appendChild(pictureFrame);

    display.appendChild(nav);
  }
}


async function renderTopLeft() {
  // Remove loading state
  display.textContent = "";

  const info = await api.getUserInfo();
  if (info === "error") {
    display.textContent = "Something went wrong, please reload the page!";
    return false;
  } else {

    display.innerHTML = `
    <div class="topLeft">
      <section>
        <div>
          <a href="https://github.com/PipHarsveld">Pip Harsveld</a>
          <p>Uitgeest</p>
          <p>CMD student</p>
        </div>
        <div></div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  `;

    const container = document.querySelector("div>section:nth-of-type(2)");
    const image = document.createElement("img");
    const pictureFrame = document.createElement("div");
    image.src = info.avatar;
    pictureFrame.appendChild(image);
    container.appendChild(pictureFrame);
  }
}

async function renderTopRight() {
  // Remove loading state
  display.textContent = "";
  const container = document.querySelector("main");
  container.innerHTML = `
    <div class="topRight">
      <section>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div></div>
      </section>

      <section>
        <div></div>
      </section>
    </div>
  `;

  const repos = await api.getRepositories(); // add this line to get the repositories

  const info = await api.getUserInfo();
  if (info === "error") {
    display.textContent = "Something went wrong, please reload the page!";
    return false;
  } else {
    const container = document.querySelector(".topLeft>section:nth-of-type(2)>div");
    // Loop through each repository and create a new article element
    repos.forEach((repo, index) => {
      const name = document.createElement("p");
      name.textContent = repo.name;
      if (index < 5) {
        // display the first 5 repositories
        container.appendChild(name);
      } else {
        // do nothing when index is greater than or equal to 5
      }
    });
  }
}


async function renderBottomLeft() {
  // Remove loading state
  display.textContent = "";
  const container = document.querySelector("main");
  container.innerHTML = `
    <div class="bottomLeft">
      <section>
        <div></div>
      </section>

      <section>
        <div></div>
      </section>
    </div>
  `;

  const repos = await api.getRepositories(); // add this line to get the repositories

  const info = await api.getUserInfo();
  if (info === "error") {
    display.textContent = "Something went wrong, please reload the page!";
    return false;
  } else {
    const container = document.querySelector(".bottomLeft>section:nth-of-type(2)>div");
    // Loop through each repository and create a new article element
    repos.forEach((repo, index) => {
      const name = document.createElement("p");
      name.textContent = repo.name;
      if (index < 5) {
        // do nothing when index is lower than 5
      } else {
        // display the last 4 repositories
        container.appendChild(name);
      }
    });
  }
}


async function renderBottomRight() {
  // Remove loading state
  display.textContent = "";
  const container = document.querySelector("main");
  container.innerHTML = `
    <div class="bottomRight">
      <section>
        <div></div>
      </section>

      <section>
        <section>
          <img src="./assets/images/linkedin.png" alt="Check my LinkedIn!">
          <div>
            <img src="./assets/images/mail.png" alt="Mail me!">
            <img src="./assets/images/telephone.png" alt="Call me!">
          </div>
        </section>

        <div></div>
      </section>
    </div>
  `;

  const repos = await api.getRepositories(); // add this line to get the repositories

  const info = await api.getUserInfo();
  if (info === "error") {
    display.textContent = "Something went wrong, please reload the page!";
    return false;
  } else {
    const container = document.querySelector(".bottomRight>section:nth-of-type(2)>div");
    // Loop through each repository and create a new article element
    repos.forEach((repo, index) => {
      const name = document.createElement("p");
      name.textContent = repo.name;
      if (index < 5) {
        // display the first 5 repositories
        container.appendChild(name);
      } else {
        // do nothing when index is greater than or equal to 5
      }
    });
  }
}

export default {
  renderHome,
  renderTopLeft,
  renderTopRight,
  renderBottomLeft,
  renderBottomRight,
};
