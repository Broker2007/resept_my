


function getCards(){
    let container = document.querySelector(`.carousel-inner`);
    let outlin = document.querySelector(`.outlin`);
    let search = new URLSearchParams(window.location.search);
    z = search.get("i");
    z = z.replaceAll('?y=', ' ');
    z = z.split(' ');
    y = z[0];
    i = z[1];
    let card = cards[i];
    let out =document.querySelector(`.out`);
    let zzzz = document.querySelector(`.zzzz`)
    if (!card){
        document.innerHTML = `<p class= "fs-5 text-center"> Не играйся с url</p>`
        setTimeout(() => {
            window.location.pathname = 'index.html'
        },5000);
        
    }else{
        cardItem = card.dish[y]
        zzzz.innerHTML +=`<h1 class="text-center zzzz">${cardItem.name_d}</h1>`;
        out.innerHTML +=`<p class="fs-3 dis text-center">${cardItem.distription}</p>`;
        outlin.innerHTML += `<p class="ing ms-3 p-2 col">${cardItem.ingredients}</p>`;
        z = cardItem.steps;
        console.log(cardItem)
        for (let i = 0; i< z.length;i++){
            stepItem = cardItem.steps[i]
            outlin.innerHTML += `<p class="col ms-3 text">${i+1}.${stepItem.step}</p>`
        };
        outlin.innerHTML += `<p class="col ms-3 fs-5 cur"><span class="color_rem">Замечание:</span>${cardItem.remarks}</p>
        `;
        outlin.innerHTML += `
        <div class=col ms-3 cur>
            <div class="container_b ms-5">
            <div class="btn_b"><a onclick="javascript:history.back(); return false;">Назад</a></div>
            </div>
        </div>
        `
    };
};
getCards()