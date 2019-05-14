let scrollDownElement = document.querySelector('.header__scroll-down')
    scrollDownElement.addEventListener('click', function() {
      window.scrollBy(0, 100 * window.innerHeight/100)
    })

let scrollTopElement = document.querySelector('.footer__scroll-top')
    scrollTopElement.addEventListener('click', function() {
      window.scrollBy(0, -100 * window.innerHeight/100)
    })