let container = document.getElementsByClassName('content')[0]

let images = [
  {
    'imageURL': '../img/waranont-joe-1347698-unsplash.jpg',
    'imageAuthorURL': 'https://unsplash.com/@tricell1991'
  },
  {
    'imageURL': '',
    'imageAuthorURL': ''
  },
  {
    'imageURL': '',
    'imageAuthorURL': ''
  },
  {
    'imageURL': '',
    'imageAuthorURL': ''
  },
  {
    'imageURL': '',
    'imageAuthorURL': ''
  }
]

for (let index = 0; index < images.length; index++) {
  let imageURL = window.location.host + 'assets/img/' + images[index].imageURL
  let imageAuthorURL = images[index].imageAuthorURL
  let imageBlock = document.createElement('div')
      imageBlock.style.backgroundImage = imageURL
      imageBlock.classList.add('grid__block')
  let imageAuthorBlock = document.createElement('div')
      imageAuthorBlock.classList.add('grid__block-author')
}