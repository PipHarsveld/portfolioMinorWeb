// Function to get all github repos
async function getRepositories() {
    try {
        // const url = `${CONFIG.baseURL}?key=${CONFIG.apiKey}`;
        const url = `https://api.github.com/users/PipHarsveld/repos`;
        const response = await fetch(url);

        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json();
            const data = json;
            const newArray = data.map(data =>{
                return{
                    name: data.name,
                    description: data.description
                }
            })
            console.log(newArray);
            return data;
        } else {
            return "error";
        }
    } catch (error) {
        console.log(error);
    }
}


//Export modules
export default getRepositories;
