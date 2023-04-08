const p_one = document.querySelector("#P_one"),
    p_two = document.querySelector("#P_two"),
    reset = document.querySelector("#Reset"),
    main_score = document.querySelector("h2"),
    form = document.querySelector('form'),
    select = document.querySelector("select");

let P1_score = 0, P2_score = 0;

form.addEventListener('submit', function (e) {
    e.preventDefault();
})

p_one.addEventListener('click', function () {
    if (select.value != P1_score && select.value != P2_score) {
        P1_score += 1;
        main_score.innerText = `${P1_score} to ${P2_score}`;
    }
    if (select.value == P1_score) {
        main_score.innerHTML = `<strong style="color:green">${P1_score}</strong> to <strong style="color:red">${P2_score}</strong>`
    }

})

p_two.addEventListener('click', function () {
    if (select.value != P1_score && select.value != P2_score) {
        P2_score += 1;
        main_score.innerText = `${P1_score} to ${P2_score}`;
    } if (select.value == P2_score) {
        main_score.innerHTML = `<strong style="color:red">${P1_score}</strong> to <strong style="color:green">${P2_score}</strong>`
    }
})

reset.addEventListener('click', function () {
    P1_score = 0, P2_score = 0;
    main_score.innerText = `${P1_score} to ${P2_score}`;
})