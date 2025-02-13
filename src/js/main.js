import reset from './reset.js';
import outcome from './outcome.js';

(() => {
  const $resultP1 = document.getElementById('js-numberP1');
  const $resultP2 = document.getElementById('js-numberP2');
  const $buttons = document.querySelectorAll('.js-button');

  const clickHandler = (e) => {
    const $button = e.currentTarget;
    const $playerId = $button.getAttribute('data-player') //動的にデータ属性取得
    if ($button.textContent === '+') {
      if ($playerId === '1') {
        $resultP1.textContent = parseInt($resultP1.textContent) + 1
      } else {
        $resultP2.textContent = parseInt($resultP2.textContent) + 1
      }
    } else if ($button.textContent === '-') {
      if ($playerId === '1') {
        $resultP1.textContent = parseInt($resultP1.textContent) - 1
      } else {
        $resultP2.textContent = parseInt($resultP2.textContent) - 1
      }
    }
  };

  //すべてのbutton要素にクリックイベント付与
  $buttons.forEach(button => button.addEventListener('click', clickHandler));


  reset();
  outcome()
})();


