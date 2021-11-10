import outsideClick from './outsideClick.js';

export default function initDropdown() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  dropdownMenu.forEach(menu => {
    ['click', 'touchstart'].forEach(evento => {
      menu.addEventListener(evento, handleClick);
    })
  })

  function handleClick(event) {//mesmo sem passar o evento eu posso pega-lo aqui
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');//callback, cliquei fora do [drop-down] remove o efeito
      //drop-down
    })
  }

}