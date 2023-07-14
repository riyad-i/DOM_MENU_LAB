// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


const mainEl = document.querySelector('main')
//task 1
mainEl.style.backgroundColor = 'var(--main-bg)';
//task 2
const newH1 = document.createElement('h1');
newH1.textContent = 'SEI Rocks!'

mainEl.appendChild(newH1)

//task 3
mainEl.classList.add("flex-ctr")

//task 2.0
const topMenuEl = document.getElementById('top-menu')

//2.1
topMenuEl.style.height = '100%';
//2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//2.3
topMenuEl.classList.add('flex-around')

//3.1
for (entry of menuLinks){
    newLink = document.createElement('a')
    topMenuEl.appendChild(newLink)
    newLink.href = entry['href']   //either or works line after
    // newLink.setAttribute('href', entry['href'])   //entry.href also an option
    newLink.innerText =entry.text;
    // console.log(newLink);
}
// console.log(topMenuEl);



//4.0
const subMenuEl = document.getElementById('sub-menu');
//4.1
subMenuEl.style.height = '100%'
//4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
//4.3
subMenuEl.classList.add('flex-around')
//4.4
subMenuEl.style.position = 'absolute'
//4.5
subMenuEl.style.top = '0'