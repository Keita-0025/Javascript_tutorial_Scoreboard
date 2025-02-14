const input = (() => {
    const $displayValues = document.querySelectorAll('[id ^= "js-display"]'); // 表示用の要素
    const $inputFields = document.querySelectorAll('[id ^= "js-input"]') // 入力用の要素
    // playerIdを取得する共通関数
    const getPlayerId = (element) => element.getAttribute('data-player');

    // //渡された引数を元にインプット・ディスプレイ要素を取得する関数
    // const getElementsByPlayerId = (playerId) => {
    //     const $input = document.querySelector(`#js-inputP${playerId}`);
    //     const $display = document.querySelector(`#js-displayValueP${playerId}`);
    //     // 要素をオブジェクトとして返す
    //     return { $input, $display };
    // };

    const dblclickHandler = (e) => {
        //クリックされた要素データ要素を取得
        // const playerId = getPlayerId(e.currentTarget);
        const playerId = e.currentTarget.getAttribute('data-player');

        // const { $input } = getElementsByPlayerId(playerId);
        // input要素を表示する
        // $input.style.display = 'inline';
        
        document.querySelector(`#js-inputP${playerId}`).style.display = 'inline';
    }


    const inputHandler = (e) => {
        //クリックされた要素データ要素を取得
        // const playerId = getPlayerId(e.currentTarget);
        const playerId = e.currentTarget.getAttribute('data-player');
        const inputValue = e.currentTarget.value; // 入力された値を取得

        if (inputValue.trim() === '') { // 入力が空の場合
            alert('チーム名を入力してください。'); // アラートを表示
            return; // 処理を中止
        }

        // const { $input, $display } = getElementsByPlayerId
        //ディスプレイ・インプット要素を取得

        // getElementsByPlayerId(playerId)
        
        // 入力された値を表示
        // $display.textContent = e.currentTarget.value;
        document.querySelector(`#js-displayValueP${playerId}`).textContent = e.currentTarget.value;

        // input要素を非表示にする
        // $input.style.display = 'none';
        document.querySelector(`#js-inputP${playerId}`).style.display = 'none';
    }

    //対象のすべての要素にイベントハンドラーを付与
    $displayValues.forEach(value => value.addEventListener('dblclick', dblclickHandler))
    $inputFields.forEach(input => input.addEventListener('change', inputHandler));

    return () => {}; // 空の関数を返す
})()

export default input;
