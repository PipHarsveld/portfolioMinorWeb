// Import modules
import render from "./render.js";
import api from "./api.js";

async function router() {
    // Check hash
    const hash = window.location.hash.slice(1);
  
    const display = document.querySelector('main');
  
    switch (hash) {
      //If hash = empty
      case "":
        display.textContent = "Welkom!";
        const repos = await api.getRepositories();
        render.renderHome(repos);
        break;
    }
  };

//Call the router funtion when the hash is changed
window.addEventListener('hashchange', router);

//Export modules
export default router;