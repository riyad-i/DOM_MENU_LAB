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
