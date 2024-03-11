const card = document.getElementById('card');
const cards = document.getElementById('cards');
const black = document.getElementById('black');
const creation = document.getElementById('creation');
const next = document.getElementById('next');
const name = document.getElementById('cname');
const clas = document.getElementById('cclass');
const title = document.getElementById('ctitle');
const exit = document.getElementById('exit');

card.addEventListener('click', (event) => {
    event.preventDefault();

    black.style.display = 'flex';
    creation.style.display = 'flex';
})

next.addEventListener('click', (event) => {
    title.innerHTML = 'Character Creation'
    event.preventDefault();

    const newCard = document.createElement('section')
    
    newCard.style.display =  'flex';
    newCard.style.backgroundColor = '#bca872d0';
    newCard.style.width = '10vw';
    newCard.style.height = '27vh';
    newCard.style.borderRadius = '10%';
    newCard.style.alignItems = 'center';
    newCard.style.boxShadow = '6px 6px 4px #00000071';
    newCard.style.marginTop = '120px';
    newCard.style.marginLeft = '90px';
    newCard.style.flexDirection = 'column';

    const img = document.createElement('img')

    img.style.width = '4.5vw';
    img.style.height = '9vh';
    img.style.borderRadius = '25%';
    img.style.marginTop = '30px';
    img.style.marginBottom = '45px';

    if(clas.value == 'warrior') {
        img.src = '../imgs/characters/warrior.jpg';
    } else if(clas.value == 'rogue') {
        img.src = '../imgs/characters/rogue.jpg';
    } else if(clas.value == 'sorcerer') {
        img.src = '../imgs/characters/sorcerer.jpg';
    } else if(clas.value =='cleric') {
        img.src = '../imgs/characters/cleric.jpg';
    }

    newCard.appendChild(img)

    const infos = document.createElement('div')

    infos.style.display = 'flex';
    infos.style.flexDirection = 'row';
    infos.style.fontSize = '15px';
    infos.style.fontFamily = '"Inter", sans-serif';
    infos.style.color = '#3D2B1B';
    infos.style.fontWeight = '600';
    infos.style.textShadow = '2px 4px 4px #00000081';
    infos.style.marginBottom = '24px';

    const namediv = document.createElement('div')
    namediv.style.display = 'flex';
    namediv.style.flexDirection = 'column';
    namediv.style.alignItems = 'center';
    namediv.style.marginRight = '30px';

    const tname = document.createElement('span');
    tname.innerHTML = 'NAME';
    tname.style.fontSize = '18px';
    namediv.appendChild(tname)

    const cname = document.createElement('span');
    cname.innerHTML = name.value;
    cname.style.textTransform ='capitalize';
    namediv.appendChild(cname);

    const classdiv = document.createElement('div');
    classdiv.style.display = 'flex';
    classdiv.style.flexDirection = 'column';
    classdiv.style.alignItems = 'center';
    
    const tclass = document.createElement('span');
    tclass.innerHTML = 'CLASS';
    tclass.style.fontSize = '18px';
    classdiv.appendChild(tclass);

    const cclass = document.createElement('span');
    cclass.innerHTML = clas.value;
    cclass.style.textTransform ='capitalize';
    classdiv.appendChild(cclass);

    infos.appendChild(namediv);
    infos.appendChild(classdiv);

    newCard.appendChild(infos)

    const thrash = document.createElement('img');
    thrash.src = '../imgs/trash.png';
    thrash.style.width = '1vw';
    thrash.style.height = '2vh';
    newCard.appendChild(thrash);

    newCard.addEventListener('mouseover', () => {
        newCard.style.animation = 'expand  0.3s ease-out forwards';
        newCard.style.cursor = 'pointer';
    })

    newCard.addEventListener('mouseout', () => {
        newCard.style.animation = 'none';
    });

    newCard.addEventListener('click', (event) => {
        event.stopPropagation()
        title.innerHTML = 'Character Editing'
        black.style.display = 'flex';
        creation.style.display = 'flex';
        newCard.remove();
    })

    thrash.addEventListener('mouseover', () => {
        thrash.style.animation = 'expand  0.1s ease-out forwards';
        thrash.style.cursor = 'pointer';
    })

    thrash.addEventListener('mouseout', () => {
        thrash.style.animation = 'none';
    });

    thrash.addEventListener('click', (event) => {
        event.stopPropagation();
        newCard.remove();
    })

    cards.insertBefore(newCard, cards.firstChild);

    name.value = '';
    clas.value = 'Warrior';

    black.style.display = 'none';
    creation.style.display = 'none';
})

exit.addEventListener('click', () => {
    window.location.href = '../index.html';
})
