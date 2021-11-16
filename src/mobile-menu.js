(() => {
  const mobileMenu = document.querySelector('[data-mobilemenu]');
  const mobileMenuClose = document.querySelector('[data-mobilemenu-close]');
  const mobileMenuOpen = document.querySelector('[data-mobilemenu-open]');
  const mobileMenuList = document.querySelector('[data-mobilemenu-list]');
 

  const toggleMenu = () => {
    const isMenuOpen =
      mobileMenuOpen.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuOpen.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenuClose.setAttribute('aria-expanded', isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    mobileMenuOpen.classList.toggle('visually-hidden'); //прячем гамбургер при открывании меню
 
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  mobileMenuClose.addEventListener('click', toggleMenu);   
  mobileMenuOpen.addEventListener('click', toggleMenu); 
  mobileMenuList.addEventListener('click', toggleMenu); //закрываем меню при выборе ссылки

//СНЯТЬ КОММЕНТАРИЙ ПОСЛЕ РЕАЛИЗАЦИИ ДЕСКТОПНОГО МЕНЮ
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   mobileMenuOpen.classList.remove('visually-hidden');
  //   mobileMenuOpen.setAttribute('aria-expanded', false);
  //   mobileMenuClose.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();