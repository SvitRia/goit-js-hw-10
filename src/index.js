import axios from "axios";
import Notiflix from 'notiflix';
import { fetchBreeds, refs } from "./cat-api";

axios.defaults.headers.common["x-api-key"] = "live_T4WrXyEMS0dHsryRbTc3mhjPUP8YW0IRvK4NEMVqVpBaMGCWQ7960NI93vKteYyR'";

const { selectBreeds, catInfo, loaderText, errorText } = refs;
console.dir(fetchBreeds());
fetchBreeds()
  .then((data) => {
    console.log(data);
    const markup = data.map((arr) => {
      return `<select>
          <option value=${arr.id}>${arr.name}</option>
        </select>`;
    })
    .join("");
  selectBreeds.innerHTML = markup;
  console.log(markup);
  })
  .catch((err) => {
    console.log(err);
  })
  
 
