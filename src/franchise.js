(() => {
  const franchise = document.querySelector('[data-franchise]');
  const franchiseClose = document.querySelector('[data-franchise-close]');
  const franchiseOpen = document.querySelector('[data-franchise-open]');

  const toggleMap = () => {
    const isMapOpen =
      franchiseOpen.getAttribute('aria-expanded') === 'true' || false;
    franchiseOpen.setAttribute('aria-expanded', !isMapOpen);
    franchiseClose.setAttribute('aria-expanded', isMapOpen);
    franchise.classList.toggle('is-open');
    // franchiseOpen.classList.toggle('visually-hidden'); //прячем гамбургер при открывании меню
 
    const scrollLockMethod = !isMapOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  franchiseClose.addEventListener('click', toggleMap);   
  franchiseOpen.addEventListener('click', toggleMap); 

//СНЯТЬ КОММЕНТАРИЙ ПОСЛЕ РЕАЛИЗАЦИИ ДЕСКТОПНОГО МЕНЮ
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   franchise.classList.remove('is-open');
  //   franchiseOpen.classList.remove('visually-hidden');
  //   franchiseOpen.setAttribute('aria-expanded', false);
  //   franchiseClose.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();