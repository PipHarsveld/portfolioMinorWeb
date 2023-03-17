const display = document.querySelector("main");


// Function to get all github repos
async function getRepositories() {
    try {
      const url = "https://api.github.com/users/PipHarsveld/repos";
      const response = await fetch(url);
  
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        const repoArray = data.map((repo) => {
          return {
            name: repo.name,
            link: repo.html_url,
            description: repo.description,
          };
        });
        return repoArray;
      } else {
        return "error";
      }
    } catch (error) {
      console.log(error);
      display.textContent = "We couldn't get the data, please check your internet connection and try again";
    }
  }

async function getUserInfo() {
  try {
    const url = "https://api.github.com/users/PipHarsveld";
    const response = await fetch(url);

    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      return {
        avatar: data.avatar_url,
        bio: data.bio,
      };
    } else {
      return "error";
    }
  } catch (error) {
    console.log(error);
    display.textContent = "We couldn't get the data, please check your internet connection and try again";
  }
}


//Export modules
export default {
    getRepositories,
    getUserInfo,
  }
  