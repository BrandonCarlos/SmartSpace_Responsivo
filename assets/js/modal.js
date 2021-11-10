export default function initModal() {
  const contact = document.querySelector('[data-animation-modal] .list li a[href^="#contact"]');

  ['touchstart', 'click'].forEach(userEvent => {
    contact.addEventListener(userEvent, handleClick);
  });

  function handleClick(e) {
    e.preventDefault();
    const modal = document.querySelector('[data-modal]');
    const fecharModal = document.querySelector('[data-modal-close]');
    modal.classList.toggle('active');

    ['touchstart', 'click'].forEach(userEvent => {
      fecharModal.addEventListener(userEvent, handleClickClose); 
    })

    function handleClickClose() {
      modal.classList.remove('active');
    }
  }
}
