// // Import modules
// import api from "./api.js"

// const display = document.querySelector('main');

// function renderHome(data = []) {
//     // Remove loading state
//     display.textContent = "";
  
//     if (data === "error") {
//       display.textContent = "Something went wrong, please reload the page!";
//       return false;
//     } else {
//       // Clear the display area
//       display.innerHTML = "";
  
//       // Create a new section element
//       const section = document.createElement("section");
  
//       // Loop through each repository and create a new article element
//       data.forEach((repo) => {
//         const article = document.createElement("article");
  
//         // Create a new h2 element with the repository name and add it to the article
//         const name = document.createElement("h2");
//         name.textContent = repo.name;
//         article.appendChild(name);
  
//         // Create a new p element with the repository description and add it to the article
//         const description = document.createElement("p");
//         description.textContent = repo.description;
//         article.appendChild(description);
  
//         // Add the article to the section
//         section.appendChild(article);
//       });
  
//       // Add the section to the display area
//       display.appendChild(section);
//     }
//   }

// //Export modules
// export default {
//     renderHome,
// }
