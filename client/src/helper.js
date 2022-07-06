
function setUnderline (listName) {
  if (listName === '') {
    document.querySelector('.active').classList.remove('active')
  } else {
    const activeElement = document.querySelector('.active')
    if (activeElement) {
      activeElement.classList.remove('active')
    }
    document.querySelector(`.navlist__${listName}`).classList.add('active')
  }
}

export {setUnderline}