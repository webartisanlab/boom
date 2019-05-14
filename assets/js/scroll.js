let scrollDownElement = document.querySelector('.header__scroll-down')
    scrollDownElement.addEventListener('click', function() {
      window.scrollTo(0, document.documentElement.scrollHeight)
    })

let scrollTopElement = document.querySelector('.footer__scroll-top')
    scrollTopElement.addEventListener('click', function() {
      window.scrollTo(0, 0)
    })