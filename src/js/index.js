import axios from "axios";
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { 
  refs
 } from "./refs"

axios.defaults.headers.common["x-api-key"] = "live_T4WrXyEMS0dHsryRbTc3mhjPUP8YW0IRvK4NEMVqVpBaMGCWQ7960NI93vKteYyR";

const { selectBreeds, catInfo, loaderText, errorText } = refs;

errorText.classList.add("not-visible");
selectBreeds.classList.add("not-visible");

console.dir(fetchBreeds());
fetchBreeds()
  .then((data) => {
    loaderText.classList.add("not-visible");
    selectBreeds.classList.replace("not-visible","visible");
    errorText.classList.replace("visible", "not-visible");
    console.log(data);
    const markup = data.map((breed) => {
       return `<option value=${breed.id}>${breed.name}</option>`;
    })
    .join("");
   
  selectBreeds.innerHTML = markup;
  })
  .catch((err) => {
    errorText.classList.replace("not-visible","visible");
    loaderText.classList.replace("visible", "not-visible");
    console.log(err);
  })

  selectBreeds.addEventListener("change", onSelectBreeds )
 
function onSelectBreeds(evt) {
  evt.preventDefault();
  loaderText.classList.replace("not-visible","visible");
  errorText.classList.replace("visible", "not-visible");
  catInfo.innerHTML = "";
  const BreedId = evt.currentTarget.value;
  console.log(BreedId);
  fetchCatByBreed(BreedId).then((newdata) => {
  if(newdata.length === 0) {
    Notiflix.Notify.failure('Error');
    catInfo.innerHTML = "";
    return
  }
  loaderText.classList.replace("visible", "not-visible");
  const { url, breeds } = newdata[0];
        
        refs.catInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"  ${breeds[0].name}</div><div class="box-text"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>/>` 
  
})
.catch((err) => {
  errorText.classList.replace("not-visible","visible");
})
}

console.dir(refs.catInfo);
 