const reviews = [
    {
        id: 0,
        name: "El Dibu",
        job: "Profesional football goalkeaper",
        img:
        "elDibu.jpg",
        text:
        "Mira que te como hermano, mira que te como hermano",
    },
    {
        id: 1,
        name: "Jhon F.Kennedy",
        job: "President of the United States",
        img:
        "jhonFkennedy.jpg",
        text:
        "Hay tantas cosas en esta vida que se te va la cabeza - Jhon F.Kennedy"
    },
    {
        id: 3,
        name: "Lionel Andres Messi",
        job: "Profesional football player",
        img:
        "messi.png",
        text:
        "Que mira bobo, que mira bobo, anda anda pa'ya bobo, anda pa'ya",
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    info.textContent = item.text;
    author.textContent = item.name;
    job.textContent = item.job;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
    
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})

