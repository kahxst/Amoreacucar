function toggleMenu() {
  var menuList = document.querySelector('.links');
  var hamburger = document.querySelector('.hamburger');

  menuList.classList.toggle('show');
  hamburger.classList.toggle('active');
  document.body.classList.toggle('menu-open', menuList.classList.contains('show'));
}
function toggleMenu2() {
  var menuList = document.querySelector('.menu-list');
  var menuList2 = document.querySelector('.menu-list2');
  var hamburger = document.querySelector('.hamburger');

  menuList.classList.toggle('show');
  menuList2.classList.toggle('show');
  hamburger.classList.toggle('active');

}
 
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

  