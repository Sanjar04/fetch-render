
// albums =================================================================================//

let url = 'https://jsonplaceholder.typicode.com/albums';

function render(sanjar){
   for(let i of sanjar){
      let li = document.createElement("li");
      li.innerHTML = `
      <h3>${i.id}</h3>
      <h1>${i.title}</h1>
      `
      document.querySelector('.albums').append(li)
   }
}

fetch(url)
.then((item)=> item.json())
.then((data)=> render(data))