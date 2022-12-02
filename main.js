// photos ===========================================================================================//
let url = 'https://jsonplaceholder.typicode.com/photos';

function render(data){
   for(let i of data){
      let li = document.createElement('li')
      li.innerHTML = `
      <span>${i.id}</span>
      <h1>${i.title}</h1>
      <img src="${i.url}" alt="" width="300">
      <img src="${i.thumbnailUrl}" alt="" width="200">
      `
      document.querySelector('.list').append(li);
   }
}

fetch(url)
.then((item)=> item.json())
.then((data)=> render(data));

























// har 3-sekunda rendir bo`ladi`
// const render = (el)=>{
//    console.log(el);
// }

// function x(a,b){
//    setInterval(() => {
//       b(a + ' bekorchilar');
//    }, 3000);
// }

// x('salom', render)


// 3-sekund bo`lganda birmarta chiqadi
// let sanjar = new Promise((s,a)=>{
//    s('salom');
// })

// sanjar
// .then((g)=>{
//    return g
// })
// .then((g)=>{
//    console.log(g + ' bekorchilar');
// })