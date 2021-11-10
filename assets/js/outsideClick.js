export default function initDropdownMenu(element, events, callback) {
  const outside = 'data-outside';
  const html = document.documentElement;

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }

  // função fase de BUBBLE - html
  function handleOutsideClick(event) {
    console.log(event.target);
    if(!element.contains(event.target)) {//[data-dropdown] não contém o target dele, ou seja
      //esse [data-dropdown] <- se eu clicar fora do filhos do [data-dropdown] <- faça algo
      element.removeAttribute(outside, '');//remove [data-outside];
      //ou seja cliquei fora dos filhos do [drop-down] remove o [data-outside],
      //por exemplo cliquei no h1 que não tem nada haver com os filhos do [drop-down] então
      //remove o [data-outside]
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);//removendo a fase de BUBBLE
        //assim teremos mais performance no nosso sistema, evitando termos eventos sem nem
        //estarmos usando
      })
      callback();//clicando fora dos filhos do [drop-down] remove esse efeito de drop-down
      //ou seja cliquei em H1 remove o efeito de drop-down, pega aquela classe active e remove
      //que está no arquivo dropdown-menu.js
    }
  }
}