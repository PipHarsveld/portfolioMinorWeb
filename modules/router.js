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
      render.renderTopLeft();
      console.log(hash);
      break;
    case "topright":
      display.textContent = "Topright";
      render.renderTopRight();
      console.log(hash);
      break;
    case "bottomleft":
      display.textContent = "Bottomleft";
      render.renderBottomLeft();
      console.log(hash);
      break;
    case "bottomright":
      display.textContent = "Bottomright";
      render.renderBottomRight();
      console.log(hash);
      break;
      case "detailbook":
      display.textContent = "Details";
      render.renderDetailBook();
      console.log(hash);
      break;
  }
}

//Call the router function when the hash is changed
window.addEventListener("hashchange", router);

export default router;