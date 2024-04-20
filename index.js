const comics__inner_box = document.querySelector(".comics__inner_box");
const BtnShowMore = document.querySelector(".for_btn__show_more_boxes");
const selectOptions = document.querySelector("#filter");
const search_text_by_user = document.querySelector("#search_text_by_user")
let statusCharacter = '';
let RickAndMortyAPI = `https://rickandmortyapi.com/api/character/?status=${statusCharacter}`;


function mainFetch() {
  fetch(RickAndMortyAPI)
    .then((response) => response.json())
    .then((answer) => {
      console.log(answer);
      answer.results.forEach((element) => {
        const EACH_BOX = document.createElement("div");
        const IMAGE = document.createElement("img");
        const NAME = document.createElement("p");
        const PRICE = document.createElement("p");
        const STATUS = document.createElement("p");
        const ORIGIN = document.createElement("p");
        const STATUS_LABEL = document.createElement("span");
        const ORIGIN_LABEL = document.createElement("span");
        const EACH_UNDER_TEXT = document.createElement("div");
        const PRICE_LABEL = document.createElement("span");

        NAME.classList.add("person_title");
        EACH_BOX.classList.add("rick_and_morty_box");
        IMAGE.classList.add("person_image");
        PRICE.classList.add("price");
        STATUS.classList.add("status");
        ORIGIN.classList.add("origin");
        STATUS_LABEL.classList.add("status_title");
        PRICE_LABEL.classList.add("price_title");
        ORIGIN_LABEL.classList.add("origin_title");
        EACH_UNDER_TEXT.classList.add("box_for_info");

        NAME.textContent = element.name;
        IMAGE.src = element.image;
        STATUS_LABEL.textContent = "Status: ";
        PRICE.textContent = Math.floor(Math.random() * 10000) + " tenge";
        PRICE_LABEL.textContent = "Price: ";
        ORIGIN_LABEL.textContent = "Origin: ";
        STATUS.textContent = element.status;
        ORIGIN.textContent = element.origin.name;

        STATUS.prepend(STATUS_LABEL);
        ORIGIN.prepend(ORIGIN_LABEL);
        PRICE.prepend(PRICE_LABEL);

        EACH_BOX.append(IMAGE);
        EACH_BOX.append(NAME);
        EACH_UNDER_TEXT.append(STATUS);
        EACH_UNDER_TEXT.append(ORIGIN);
        EACH_UNDER_TEXT.append(PRICE);

        comics__inner_box.append(EACH_BOX);
        EACH_BOX.append(EACH_UNDER_TEXT);

        RickAndMortyAPI = answer.info.next;
        
      });
    });
}

console.log(search_text_by_user.value)
search_text_by_user.addEventListener("input", function() {
  const searchValue = search_text_by_user.value.trim(); 
  if (searchValue !== "") { 
    RickAndMortyAPI = `https://rickandmortyapi.com/api/character/?name=${searchValue}`;
    comics__inner_box.innerHTML = '';
    mainFetch();
  }
})
  
  
mainFetch();
BtnShowMore.addEventListener("click", function () {
  mainFetch()
  console.log(RickAndMortyAPI);
})



selectOptions.addEventListener("change", function () { 
  const selectedFilter = selectOptions.value; 
  if (selectedFilter === "status_alive") { 
    statusCharacter = 'alive';
    RickAndMortyAPI = `https://rickandmortyapi.com/api/character/?status=alive`;
    comics__inner_box.innerHTML = '';
    mainFetch()
  } else if (selectedFilter === "status_dead") { 
    statusCharacter = 'dead';
    RickAndMortyAPI = `https://rickandmortyapi.com/api/character/?status=dead`;
    comics__inner_box.innerHTML = '';
    mainFetch()
  } else if (selectedFilter === "status_unknown") { 
    statusCharacter = 'unknown';
    RickAndMortyAPI = `https://rickandmortyapi.com/api/character/?status=unknown`;
    comics__inner_box.innerHTML = '';
    mainFetch()
  } else if (selectedFilter === "status_all") { 
    statusCharacter = 'all';
    RickAndMortyAPI = `https://rickandmortyapi.com/api/character`;
    comics__inner_box.innerHTML = '';
    mainFetch()
  } 
});
