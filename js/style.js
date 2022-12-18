function opennav(){
  document.getElementById("mysidenav").style.width="250px";
  document.getElementById("main").style.width="250px";
}

function closenav(){
  document.getElementById("mysidenav").style.width="0px";
  document.getElementById("main").style.width="0px";
}
const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})