
const reset = (() => {

  // playerIdを取得する共通関数
  const getPlayerId = (element) => element.getAttribute('data-player'); 
  //すべてのresetボタン取得
  const $buttons = document.querySelectorAll('[id^="js-reset"]');
  //すべてのresult個別取得
  const $resets = {
    1: document.getElementById('js-numberP1'), //プレイヤー１の得点
    2: document.getElementById('js-numberP2') //プレイヤー2の得点
  };

  const clickHandler = (e) => {
    const playerId = getPlayerId(e.currentTarget) //クリックされたボタンのdata属性を取得

    // winが表示されているかどうかを確認
    const $winTextP1 = document.getElementById('winP1').style.display;
    const $winTextP2 = document.getElementById('winP2').style.display;

    // winが表示されていない場合は処理を中止
    if ($winTextP1 === 'inline' || $winTextP2 === 'inline') {
      alert("試合が終了しているため、リセットできません。");
      return; // 処理を中止
    }

    // リセット処理（動的にresultを取得しリセット）
    $resets[playerId].textContent = 0;
  }


  //すべてのbutton要素にクリックイベント付与
  $buttons.forEach(button => {
    button.addEventListener('click', clickHandler);
  });

  return () => { }; // 空の関数を返す
})();

export default reset;