import reset from './reset.js';

(() => {
  const $result = document.getElementById('js-number');
  const $buttons = document.getElementsByClassName('js-button');

  const clickHandler =(e) => {
    const $button = e.currentTarget
      if ($button.textContent === '+') {
        console.log('+')
        $result.textContent = parseInt($result.textContent) + 1
      } else {
        $result.textContent = parseInt($result.textContent) - 1
        console.log('-')
      };
  };

  for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', clickHandler);
  };

  reset();
})();


