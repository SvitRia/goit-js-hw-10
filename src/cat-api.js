export const refs = {
    selectBreeds:document.querySelector(".breed-select"),
    loaderText:document.querySelector(".loader"),
    errorText:document.querySelector(".error"),
    catInfo:document.querySelector(".cat-info")
 }

const options = {
    method: "GET",
  };
  export async function fetchBreeds() {
    try {
        const resp = await fetch("https://api.thecatapi.com/v1/breeds");
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        const data = await resp.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        throw error;
    }
 }






