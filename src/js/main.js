import reset from './reset.js';
import outcome from './outcome.js';
import input from './input.js';

(() => {
  const $resultP1 = document.getElementById('js-numberP1');
  const $resultP2 = document.getElementById('js-numberP2');
  const $buttons = document.querySelectorAll('.js-button');
  const $gameControlButtons = document.querySelectorAll('.scoreboard__main--btn .btn');
  // タイマー表示
  const $timerDisplay = document.querySelector('.scoreboard__main--timer');

  let timerInterval;
  let seconds = 0;

  const updateTimer = () => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    $timerDisplay.textContent = `試合時間: ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const updateScore = (playerId, increment) => {
    const $result = playerId === '1' ? $resultP1 : $resultP2;
    const newScore = $result.textContent = parseInt($result.textContent) + increment;
     // 得点が0未満にならないようにする
     $result.textContent = Math.max(newScore, 0);
  };

  const clickHandler = (e) => {
    const $button = e.currentTarget;
    //動的にデータ属性取得
    const playerId = $button.getAttribute('data-player')

    const increment = $button.textContent === '+' ? +1 : -1;
    updateScore(playerId, increment)
  };

  const resetGame = () => {
    seconds = 0; // タイマーをリセット
    // タイマー表示を初期化
    $timerDisplay.textContent = `試合時間: 00:00`;
    //「win」非表示
    document.getElementById('winP1').style.display = 'none';
    document.getElementById('winP2').style.display = 'none';
    // 得点をリセット
    $resultP1.textContent = 0;
    $resultP2.textContent = 0;
  }

  const endGame = () => {
    clearInterval(timerInterval); // タイマーを停止

    //両プレーヤーの得点を取得する
    const scoreP1 = parseInt($resultP1.textContent);
    const scoreP2 = parseInt($resultP2.textContent);

    // winの表示処理
    if (scoreP1 > scoreP2) {
      // プレイヤー1のwinを表示
      document.getElementById('winP1').style.display = 'inline';
    } else if (scoreP2 > scoreP1) {
      // プレイヤー2のwinを表示
      document.getElementById('winP2').style.display = 'inline';
    } else {
      // 引き分けの場合の処理（必要に応じて）
      document.getElementById('winP1').style.display = 'none';
      document.getElementById('winP2').style.display = 'none';
      alert("引き分けです！");
    }
  }

  const gameControlHandler = (e) => {
    //動的にゲーム状態（試合開始か試合終了）かを取得
    const action = e.currentTarget.getAttribute('data-action');
    if (action === 'start') {
      alert("試合が開始されました");
      resetGame();
      // 1秒ごとにタイマーを更新
      timerInterval = setInterval(updateTimer, 1000);

    } else if (action === 'end') {
      endGame();
    } else if (action === 'reset') {
      // タイマーを停止
      clearInterval(timerInterval);
      resetGame(); // ゲームをリセット
    }
  };


  // const gameControlHandler = (e) => {
  //   //動的にゲーム状態（試合開始か試合終了）かを取得
  //   const action = e.currentTarget.getAttribute('data-action');
  //   if (action === 'start') {
  //     alert("試合が開始されました");
  //     seconds = 0; // タイマーをリセット
  //     updateTimer(); // 初期表示

  //     //「win」非表示
  //     document.getElementById('winP1').style.display = 'none';
  //     document.getElementById('winP2').style.display = 'none';

  //     // 得点をリセット
  //     $resultP1.textContent = 0;
  //     $resultP2.textContent = 0;

  //     timerInterval = setInterval(updateTimer, 1000); // 1秒ごとにタイマーを更新
  //   } else if (action === 'end') {
  //     clearInterval(timerInterval); // タイマーを停止
  //     console.log("試合が終了しました");
  //     const scoreP1 = parseInt($resultP1.textContent);
  //     const scoreP2 = parseInt($resultP2.textContent);

  //     // winの表示処理
  //     if (scoreP1 > scoreP2) {
  //       document.getElementById('winP1').style.display = 'inline'; // プレイヤー1のwinを表示
  //     } else if (scoreP2 > scoreP1) {
  //       document.getElementById('winP2').style.display = 'inline'; // プレイヤー2のwinを表示
  //     } else {
  //       // 引き分けの場合の処理（必要に応じて）
  //       document.getElementById('winP1').style.display = 'none';
  //       document.getElementById('winP2').style.display = 'none';
  //       alert("引き分けです！");
  //     }
  //   }
  // };

  //すべてのbutton要素にクリックイベント付与
  $buttons.forEach(button => button.addEventListener('click', clickHandler));
  // 試合開始と終了とresetボタンにイベント付与
  $gameControlButtons.forEach(button => button.addEventListener('click', gameControlHandler));


  reset();
  outcome();
  input();
})();


