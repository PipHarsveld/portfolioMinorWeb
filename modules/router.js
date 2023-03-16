import render from "./render.js";
import api from "./api.js";

async function router() {
  // Check hash
  const hash = window.location.hash.slice(1);

  const display = document.querySelector("main");

  switch (hash) {
    //If hash = empty
    case "":
      display.textContent = "Welkom!";
      const repos = await api.getRepositories();
      render.renderHome(repos);
      break;
    case "topleft":
      display.textContent = "Topleft";
      render.renderTopLeft(repos);
      console.log(hash);
      break;
    case "topright":
      display.textContent = "Topright";
      render.renderTopRight(repos);
      console.log(hash);
      break;
    case "bottomleft":
      display.textContent = "Bottomleft";
      console.log(hash);
      break;
    case "bottomleft":
      display.textContent = "Bottomleft";
      console.log(hash);
      break;
  }
}

//Call the router function when the hash is changed
window.addEventListener("hashchange", router);

export default router;