const menu = document.querySelector('.navigation__checkbox');
const menuList = document.querySelectorAll('.navigation__item');

menuList.forEach(item=>{
    item.addEventListener('click',()=>{
        menu.checked = false;
    })
})