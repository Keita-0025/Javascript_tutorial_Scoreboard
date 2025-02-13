const reset = (() => {
  //すべてのresetボタン取得
  const $buttons = document.querySelectorAll('[id^="js-reset"]');
  //すべてのresult個別取得
  const $resets = {
    1: document.getElementById('js-numberP1'), //プレイヤー１の得点
    2: document.getElementById('js-numberP2') //プレイヤー2の得点
  };

  const clickHandler = (e) => {
    const $playerId = e.currentTarget.getAttribute('data-player') //クリックされたボタンのdata属性を取得
    $resets[$playerId].textContent = 0; // 動的にresultを取得しリセット
  }


  //すべてのbutton要素にクリックイベント付与
  $buttons.forEach(button => {
    button.addEventListener('click', clickHandler);
  })

  return () => { }; // 空の関数を返す
})();

export default reset;