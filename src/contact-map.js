(() => {
  const contactMap = document.querySelector('[data-contactmap]');
  const contactMapClose = document.querySelector('[data-contactmap-close]');
  const contactMapOpen = document.querySelector('[data-contactmap-open]');

  const toggleMap = () => {
    const isMapOpen =
      contactMapOpen.getAttribute('aria-expanded') === 'true' || false;
    contactMapOpen.setAttribute('aria-expanded', !isMapOpen);
    contactMapClose.setAttribute('aria-expanded', isMapOpen);
    contactMap.classList.toggle('is-open');
    contactMapOpen.classList.toggle('visually-hidden'); //прячем гамбургер при открывании меню
 
    const scrollLockMethod = !isMapOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  contactMapClose.addEventListener('click', toggleMap);   
  contactMapOpen.addEventListener('click', toggleMap); 

//СНЯТЬ КОММЕНТАРИЙ ПОСЛЕ РЕАЛИЗАЦИИ ДЕСКТОПНОГО МЕНЮ
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   contactMap.classList.remove('is-open');
  //   contactMapOpen.classList.remove('visually-hidden');
  //   contactMapOpen.setAttribute('aria-expanded', false);
  //   contactMapClose.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();