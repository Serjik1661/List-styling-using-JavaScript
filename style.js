const stylesArray = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' }
];
const styleString = stylesArray.map(style => `${style.name}: ${style.value};`).join(' ');

document.getElementById('addButton').addEventListener('click', function(){
    const INPUT = document.getElementById('itemInput');
    const NEWITEMTEXT = INPUT.value.trim();


    if(NEWITEMTEXT){
        const li = document.createElement('li');
        li.textContent = NEWITEMTEXT;
        li.setAttribute('style', styleString);
        document.getElementById('itemList').appendChild(li);
        INPUT.value = '';
    } else {
        alert('Введите элемент списка');
    }


})
