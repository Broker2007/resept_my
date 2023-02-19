let buttonHeader = document.querySelector('.bg_header_2');

buttonHeader.style.backgroundColor = '#d4bb17';

let cards_main = document.querySelector(`.cards_main`);
for(let i = 0; i<cards.length;i++){
    card = cards[i];
    cards_main.innerHTML += `<a class="card_h col" href="content.html?i=${i}">
    <div class="card__background" style = "background-image: ${card.src}"></div>
    <div class="card__content">
      <h3 class="card__heading">${card.name}</h3>
    </div>
  </a>`
}