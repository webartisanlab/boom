let container = document.getElementsByClassName('content')[0]

let images = [
  {
    'imageURL': '../img/alt/waranont-joe-1347698-unsplash.jpg',
    'imageAuthorURL': 'https://unsplash.com/@tricell1991',
    'imageAuthorNickname': 'tricell1991'
  },
  {
    'imageURL': '../img/alt/steven-roe-1058281-unsplash.jpg',
    'imageAuthorURL': 'https://unsplash.com/@steveroe_',
    'imageAuthorNickname': 'stevenroe_'
  },
  {
    'imageURL': '../img/alt/joshua-fuller-368384-unsplash.jpg',
    'imageAuthorURL': 'https://unsplash.com/@joshuafuller',
    'imageAuthorNickname': 'joshuafuller'
  },
  {
    'imageURL': '../img/alt/andrew-amistad-70863-unsplash.jpg',
    'imageAuthorURL': 'https://unsplash.com/@aamistad',
    'imageAuthorNickname': 'aamistad'
  },
  {
    'imageURL': '../img/alt/efe-kurnaz-315384-unsplash.jpg',
    'imageAuthorURL': 'https://unsplash.com/@catcap',
    'imageAuthorNickname': 'catcap'
  }
]

let i = 0

while (i < 5) {
  for (let index = 0; index < images.length; index++) {
    let imageURL = window.location.host + 'assets/img/' + images[index].imageURL
    let imageAuthorURL = images[index].imageAuthorURL
    let imageAuthorNickname = images[index].imageAuthorNickname
  
    let imageBlock = document.createElement('div')
        imageBlock.style.backgroundImage = 'url(' + imageURL + ')'
        imageBlock.classList.add('grid__block')
  
    let imageAuthorBlock = document.createElement('div')
        imageAuthorBlock.classList.add('grid__block-author')
        
    let imageAuthorBlockURL = document.createElement('a')
        imageAuthorBlockURL.setAttribute('href', imageAuthorURL)
        imageAuthorBlockURL.innerHTML = imageAuthorNickname
  
    imageAuthorBlock.appendChild(imageAuthorBlockURL)
    imageBlock.appendChild(imageAuthorBlock)
    container.appendChild(imageBlock)
  }

  i++
}