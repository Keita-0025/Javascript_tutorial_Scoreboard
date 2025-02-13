const reset = (() => {
  const $reset = document.getElementById('js-reset');
  const $result = document.getElementById('js-number');
  const clickHandler = () => {
    $result.textContent=0
  }
  $reset.addEventListener('click', clickHandler)
  return () => {}; // 空の関数を返す
})();

export default reset;