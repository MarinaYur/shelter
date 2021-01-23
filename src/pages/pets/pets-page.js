window.onload = function() {
        console.log("Hello pets");
        changeLocationPetsPageToMainPage();
    }
    
    //change location pets page to main page
    
    const changeLocationPetsPageToMainPage = () => {
        let hrefAboutTheShelterGoToMainPage = document.querySelector('.link__about_the_shelter');
        hrefAboutTheShelterGoToMainPage.href = "../main/main.html";
    }