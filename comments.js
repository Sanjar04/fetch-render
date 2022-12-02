// comments =============================================================================//
let url = 'https://jsonplaceholder.typicode.com/comments'

function render(comments){
   for(let i of comments){
      let li = document.createElement("li");
      li.innerHTML = `
      <span>${i.id}</span>
      <h2>${i.name}</h2>
      <h3>${i.email}</h3>
      <p>${i.body}</p>
      `
      document.querySelector(".comments").append(li)
   }
}

fetch(url)
.then((item)=> item.json())
.then((comments)=> render(comments))