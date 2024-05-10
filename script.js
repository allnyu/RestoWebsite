const navMenu = document.getElementById('nav_menu'), navToggle = document.getElementById('nav_toggle'), navClose = document.getElementById('nav_close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classlist.add('show_menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classlist.remove('show_menu')
    })
}