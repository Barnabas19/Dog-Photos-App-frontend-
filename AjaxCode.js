//collecting image and button objects from the DOM
const image = document.querySelector(".image");
const button = document.querySelector(".button");

//make an asynchronous fetch for photos from public API
function getPhotos(){
const URL = "https://dog.ceo/api/breeds/image/random";
const promise = fetch(URL);
promise.then(function(response){
    const processingResponse = response.json();
    return processingResponse;
}).then(function(processedResponse){
    image.src = processedResponse.message;
    image.alt = "Cute dog";
});
}

getPhotos();

button.addEventListener("click", function(){
    getPhotos();
});