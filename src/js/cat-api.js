
const BAS_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_T4WrXyEMS0dHsryRbTc3mhjPUP8YW0IRvK4NEMVqVpBaMGCWQ7960NI93vKteYyR";
const options = {
    method: "GET",
  };
  export async function fetchBreeds() {
    try {
        const resp = await fetch(`${BAS_URL}/breeds`);
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        const data = await resp.json();
        console.dir(data);
        return data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        throw error;
    }
 }
 export async function fetchCatByBreed(breedId) {
    try { 
    const respons = await fetch (`${BAS_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    if (!respons.ok) {
        throw new Error(respons.statusText);
 }
 const newdata = await respons.json();
 console.dir(newdata);
 return newdata;
}
catch (error) {
    console.error("Error fetching breeds:", error);
    throw error;
}
}





