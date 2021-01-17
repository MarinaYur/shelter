window.onload = function() {
    console.log("Hello world");
    changeLocationMainToPetsPage ();
    openCloseBurgerMenu();
}

//change location main page to pets page

const changeLocationMainToPetsPage = () => {
    let hrefOurPetsGoToPetsPage = document.querySelector('.link__our_pets');
    hrefOurPetsGoToPetsPage.href = "../pets/pets.html";
    // console.log(hrefPetsPageGoToPetsPage);
    let buttonMakeAfriendGoToPetsPage = document.querySelector('.notOnly__content a');
    buttonMakeAfriendGoToPetsPage.href = "../pets/pets.html";
}

// open/close mobile-menu

const openCloseBurgerMenu = () => {
    let logo = document.querySelector('.logo');
    let burger = document.querySelector('.humburger');
    let navigation = document.querySelector('.navigation');
    let shadow = document.querySelector('.shadow');
    let body = document.querySelector('body');
    let burgerLine = document.querySelector('.humburger__line');
    body.addEventListener('click', (e) => {
        if (e.target == burger || e.target == burgerLine || e.target == shadow) {
            if (!logo.classList.contains('logo_opened_burger')) { 
                openBurgerMenu(logo, burger, navigation, shadow, body);
            } else {
                closeBurgerMenu(logo, burger, navigation, shadow, body);
            }
        }
    });
}

// open mobile-menu

const openBurgerMenu = (logo, burger, navigation, shadow, body) => {
    body.style.overflow = 'hidden';
    logo.classList.add('logo_opened_burger');
    burger.classList.add('burger_reverse');
    navigation.style.display = 'block';
    navigation.classList.remove('slide-out');
    navigation.classList.add('slide-in');
    shadow.classList.add('shadow_on');
    // navigation.classList.add('burger_mobile_open');
    // navigation.classList.remove('burger_mobile_close');
    
}

//close mobile-menu

const closeBurgerMenu = (logo, burger, navigation, shadow, body) => {
    body.style.overflow = 'visible';
    logo.classList.remove('logo_opened_burger');
    burger.classList.remove('burger_reverse');
    shadow.classList.remove('shadow_on');
    navigation.classList.add('slide-out');
    navigation.classList.remove('slide-in');
    // navigation.classList.remove('burger_mobile_open');
    // navigation.classList.add('burger_mobile_close');
}