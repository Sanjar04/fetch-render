// posts ==========================================================================================//
let post = 'https://jsonplaceholder.typicode.com/posts';

function render(posts){
   for(let i of posts){
      let box = document.createElement("li");
      box.innerHTML = `
      <span>${i.id}</span>
      <h2>${i.title}</h2>
      <p>${i.body}</p>
      `
      document.querySelector(".posts").append(box);
   }
}

fetch(post)
.then((item)=> item.json())
.then((posts)=> render(posts))