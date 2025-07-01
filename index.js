const apikey = "CQxVkAt-rMZyPYNUwC6PGTKzDB2OXp-e3rt46FxJ3WY";

const form = document.querySelector("form");
const input = document.querySelector(".search_box");
const searchResult = document.querySelector("#search-result");
const showmore = document.querySelector(".show-more-button");

let inputData = "";
let page = 1;

async function searchImage() {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = result.urls.small;
        searchResult.appendChild(image);
    });

    // Show the button only if there are more pages
    showmore.style.display = "block";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    inputData = input.value;
    searchResult.innerHTML = ""; // Only clear on a new search
    searchImage();
});

showmore.addEventListener("click", () => {
    page++;
    searchImage();
});
