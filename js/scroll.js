function renderBurger(){
    let open_but = document.querySelector(`.open-but`);
    let menu_but = document.querySelector(`.menu-but`);
    console.log(menu_but)
    let zzz = document.querySelector(`.zzz`);
    let menu_block_1 = document.querySelector(`.menu-block_1`);
    let menu_block_2 = document.querySelector(`.menu-block_2`);

    let web = document.querySelector(`.web`);
    let catalog = document.querySelector(`.catalog`);
    let search = new URLSearchParams(window.location.search);

    let i = search.get(`i`);
    let card = cards[i];
    for(let i = 0; i < card.dish.length;i++){
        console.log(`fhnf`)
        cardItem = card.dish[i];
        catalog.innerHTML += ` <li class="list-unstyled col buttons"><button  class="menu-link-${i} open-but search btn-hover color-8"><a href="resept.html?i=${i}?y=${search.get(`i`)}" class="text-decoration-none color_car font-size-list">${cardItem.name_d}</a></button></li>`
    }
    menu_but.addEventListener(`click`, render);
    zzz.addEventListener(`click`, render); 
    let cnt = 0
    function render(){
        console.log(cnt)
        let mass = document.querySelectorAll(`.search`);
            if (!menu_but.classList.contains(`open-done`)){
                menu_but.classList.add(`open-done`);
                menu_but.classList.remove(`opacity-0`);
                web.classList = 'web'
                
                let cnt = 400
                setTimeout(() => {
                    menu_block_1.classList.add(`open-done`)
                },30);
                setTimeout(() => {
                    menu_block_2.classList.add(`open-done`)
                },200);
                for(let i = 0; i < mass.length;i++){
                    if(cnt < 700){
                        cnt += 100
                        let item = mass[i];
                        console.log(item)
                        setTimeout(() => {
                            item.classList.add(`open-done`);
                        },cnt);
                    }else{
                        cnt = 400
                        let item = mass[i];
                        setTimeout(() => {
                        item.classList.add(`open-done`)
                        },cnt);
                    }
                    
                } 
    }else{
        menu_but.classList.remove(`open-done`);
        menu_but.classList.add(`opacity-0`);
        setTimeout(() => {
            web.classList = 'web d-none'
        },600);
        let cnt = 0
        setTimeout(() => {
            menu_block_1.classList.remove(`open-done`)
        },800);
        setTimeout(() => {
            menu_block_2.classList.remove(`open-done`)
        },600);
        for(let i = 0; i < mass.length;i++){
            if(cnt < 300){
                cnt += 100
                let item = mass[i];
                console.log(item)
                setTimeout(() => {
                item.classList.remove(`open-done`)
                },cnt);
            }else{
                cnt = 100
                let item = mass[i];
                setTimeout(() => {
                item.classList.remove(`open-done`)
                },cnt);
            }
            
        } 

    }
    }
}


function getCards(){
    let container = document.querySelector(`.carousel-inner`);

    let search = new URLSearchParams(window.location.search);

    let i = search.get(`i`);
    let card = cards[i];
    if (!card){
        document.innerHTML = `<p class= "fs-5 text-center"> Не играйся с url</p>`
        setTimeout(() => {
            window.location.pathname = 'index.html'
        },5000);
        
    }else{
        for (let i = 0; i<card.dish.length; i++){
            cardItem = card.dish[i];
            console.log(`fghgf`)
            if(i == 0){
                container.innerHTML += `<div class="carousel-item active">
                <img src="${cardItem.src}" class="d-block w-100 object-fit-cover img_blur" alt="..." height="500px">
                <div class="d-none d-md-block carousel-captio">
                <p>${cardItem.name_d}</p>
                <div class="container_b ms-5">
                    <div class="btn_b"><a href="resept.html?i=${i}?y=${search.get(`i`)}" class="text-decoration-none color_car">Перейти</a></div>
                </div>
                </div>
            </div>`  

            }else if(i < 4){
                container.innerHTML += `<div class="carousel-item">
                <img src="${cardItem.src}" class="d-block w-100 object-fit-cover img_blur" alt="..." height="500px">
                <div class="d-none d-md-block carousel-captio">
                <p>${cardItem.name_d}</p>
                <div class="container_b ms-5">
                    <div class="btn_b"><a href="resept.html?i=${i}?y=${search.get(`i`)}" class="text-decoration-none color_car">Перейти</a></div>
                </div>
                </div>
            </div>`

            }   
        }
        container.innerHTML += `<div class="carousel-item">
                <img src="" class="d-block w-100 object-fit-cover img_blur opacity-0" alt="..." height="500px">
                <div class="d-none d-md-block carousel-captio">
                <p class="color_car">Хотите узнать больше?Жмите сюда</p>
                <div class="container_b ms-5">
                    <div class="btn_b zzz"><a>Каталог</a></div>
                </div>
                </div>
            </div>`
    }
}
getCards()
renderBurger()