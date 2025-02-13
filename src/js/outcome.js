const outcome = (() => {
    const $buttons = document.querySelectorAll('[id^="js-outcome"]')
    console.log($buttons);

    const clickHandler = (e) => {
        const $playerId = e.currentTarget.getAttribute('data-player');
        alert (`Player ${$playerId} winner!!!`)
    }

    $buttons.forEach(button=> button.addEventListener('click', clickHandler))

    return () => { }; // 空の関数を返す
})();

export default outcome;