// Function to get all github repos
async function getRepositories() {
    try {
      const url = "https://api.github.com/users/PipHarsveld/repos";
      const response = await fetch(url);
  
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        const newArray = data.map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
          };
        });
        return newArray;
      } else {
        return "error";
      }
    } catch (error) {
      console.log(error);
    }
  }



//Export modules
export default {
    getRepositories
  }
  