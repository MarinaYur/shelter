window.onload = function() {
    console.log("Hello");
    changeLocationMainToPetsPage ();
}

//change location main page to pets page

const changeLocationMainToPetsPage = () => {
    let hrefOurPetsGoToPetsPage = document.querySelector('.link__our_pets');
//    let answer = hrefOurPetsGoToPetsPage.getAttribute("href");
   console.log(hrefOurPetsGoToPetsPage);
    hrefOurPetsGoToPetsPage.href = "../pets/pets.html";
    // console.log(hrefPetsPageGoToPetsPage);
    let buttonMakeAfriendGoToPetsPage = document.querySelector('.notOnly__content a');
    console.log(buttonMakeAfriendGoToPetsPage);
    buttonMakeAfriendGoToPetsPage.href = "../pets/pets.html";
}