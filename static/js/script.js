/*function pos(e) {
    let x = e.pageX;
    let y = e.pageY;
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('active')
        })
        card.addEventListener('mouseout', () => {
            card.classList.remove('active')
        })
    })
}

addEventListener('mousemove', pos, false);
*/
/*function pos(e) {
    console.log(e.pageX, e.pageY)
}

addEventListener('mousemove', pos, false);
*/
/*
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientReact(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", '${x}px');
    target.style.setProperty("--mouse-y", '${y}px');
}

for (const card of document.querySelectorAll('.card')) {
    card.onmousemove = e => handleOnMouseMove(e);
}*/
const body = document.querySelector('.body')
const main_section = document.querySelector('.main-section')
const menu = document.querySelector('.menu')
const menu_burger = document.querySelector('.menu-burger')
menu_burger.addEventListener('click', () => {
    body.classList.toggle('active')
    main_section.classList.toggle('active')
    menu.classList.toggle('active')
    menu_burger.classList.toggle('active')
})