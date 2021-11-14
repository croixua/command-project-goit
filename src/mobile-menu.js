(() => {
  const mobileMenu = document.querySelector('[data-mobilemenu]');
  const mobileMenuClose = document.querySelector('[data-mobilemenu-close]');
  const mobileMenuOpen = document.querySelector('[data-mobilemenu-open]');
 

  const toggleMenu = () => {
    const isMenuOpen =
      mobileMenuClose.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuClose.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
 
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  mobileMenuClose.addEventListener('click', toggleMenu);
  mobileMenuOpen.addEventListener('click', toggleMenu);


  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   mobileMenuClose.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();