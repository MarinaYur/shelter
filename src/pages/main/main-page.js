window.onload = function() {
    console.log("HW");
    changeLocationMainToPetsPage ();
    openCloseBurgerMenu();
    createPopap();
    slider();
}

// const a = () => {
    let pets = [
        {
        "name": "Jennifer",
        "img": "../../assets/images/pet-Jennifer.svg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
          },
        {
          "name": "Sophia",
          "img": "../../assets/images/pets-sophia.svg",
          "type": "Dog",
          "breed": "Shih tzu",
          "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
          "age": "1 month",
          "inoculations": ["parvovirus"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Woody",
          "img": "../../assets/images/pets-woody.svg",
          "type": "Dog",
          "breed": "Golden Retriever",
          "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
          "age": "3 years 6 months",
          "inoculations": ["adenovirus", "distemper"],
          "diseases": ["right back leg mobility reduced"],
          "parasites": ["none"]
        },
        {
          "name": "Scarlett",
          "img": "../../assets/images/pets-scarlet.svg",
          "type": "Dog",
          "breed": "Jack Russell Terrier",
          "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
          "age": "3 months",
          "inoculations": ["parainfluenza"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Katrine",
          "img": "../../assets/images/pets-katrine.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
          "age": "6 months",
          "inoculations": ["panleukopenia"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Timmy",
          "img": "../../assets/images/pets-timmy.svg",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
          "age": "2 years 3 months",
          "inoculations": ["calicivirus", "viral rhinotracheitis"],
          "diseases": ["kidney stones"],
          "parasites": ["none"]
        },
        {
          "name": "Freddie",
          "img": "../../assets/images/pets-freddie.svg",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
          "age": "2 months",
          "inoculations": ["rabies"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Charly",
          "img": "../../assets/images/pets-charly.svg",
          "type": "Dog",
          "breed": "Jack Russell Terrier",
          "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
          "age": "8 years",
          "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
          "diseases": ["deafness", "blindness"],
          "parasites": ["lice", "fleas"]
        }
    ]
    // let petsArray = [];
    // for (let i = 0; i < pets.length; i ++) {
    //     petsArray.push(JSON.parse(pets[i]));
//     // }
//     console.log(pets[1].img);
// }





// create cards

const createPopap = () => {
    let petsData = [
    {   "id" : "1",
        "name": "Jennifer",
        "img": "../../assets/images/pet-Jennifer.svg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
    {
        "id" : "2",
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.svg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "id" : "3",
      "name": "Woody",
      "img": "../../assets/images/pets-woody.svg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
        "id" : "4",
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.svg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "id" : "5",
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "id" : "6",
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.svg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
        "id" : "7",
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.svg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "id" : "8",
      "name": "Charly",
      "img": "../../assets/images/pets-charly.svg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]
    // let pets1 = JSON.parse(pets);
    let slider__pets = document.querySelector('.slider__pets');
    let pets = document.querySelectorAll('.pet')
    // console.log(pets);
    pets.forEach(pet => {
        pet.addEventListener('click', (e) => {
            
            // console.log(e.target.childNodes);
            // if(e.target.classList.contains('pet') || e.target.classList.contains('pet__image')) {
                let popap = document.createElement('div');
                let popapClose = document.createElement('div');
                let imgClose = document.createElement('img');
                let petPhoto = document.createElement('div');
                let popapCard = document.createElement('div');
                let popapPetInform = document.createElement('div');
                let title = document.createElement('h3');
                let subtitle = document.createElement('h4');
                let description = document.createElement('h5');
                let ul = document.createElement('ul');
                let liAge = document.createElement('li');
                let liInocalations = document.createElement('li');
                let liDiseases = document.createElement('li');
                let liParasites = document.createElement('li');
                let p1 = document.createElement('p');
                let b1 = document.createElement('b');
                let p2 = document.createElement('p');
                let b2 = document.createElement('b');
                let p3 = document.createElement('p');
                let b3 = document.createElement('b');
                let p4 = document.createElement('p');
                let b4 = document.createElement('b');
                popap.classList.add('popap');
                popapClose.classList.add('popap_close');
                popapCard.classList.add('popap_card');
                petPhoto.classList.add('pet_photo');
                popapPetInform.classList.add('pet-inform');
                // liAge.classList.add()
                title.classList.add('popap__title');
                subtitle.classList.add('popap__subtitle');
                description.classList.add('popap__description');
                ul.classList.add('popap__list');
                liAge.classList.add('popap__age');
    
                slider__pets.prepend(popap);
                popap.append(popapClose);
                popapClose.append(imgClose);
                imgClose.setAttribute('src', '../../assets/images/close.svg');
                popap.append(popapCard);
                popapCard.append(petPhoto);
                popapCard.append(popapPetInform);
                popapPetInform.append(title);
                popapPetInform.append(subtitle);
                popapPetInform.append(description);
                popapPetInform.append(ul);
                ul.append(liAge);
                liAge.append(p1);
                p1.append(b1);
                ul.append(liInocalations);
                liInocalations.append(p2);
                p2.append(b2);
                ul.append(liDiseases);
                liDiseases.append(p3);
                p3.append(b3);
                ul.append(liParasites);
                liParasites.append(p4);
                p4.append(b4);
                petName = pet.querySelector('.pet__name');
                petsData.forEach(petData => {
                    // console.log(title);
                    if (petName.innerHTML == petData.name) {
                        petPhoto.style = 'background-image: url("' + petData.img + '")';
                        title.innerHTML = petData.name;
                        subtitle.innerHTML = petData.type + ' - ' + petData.breed;
                        description.innerHTML = petData.description;
                        p1.innerHTML = '<b style="font-weight: 700">Age: </b>' + petData.age;
                        p2.innerHTML = '<b>Inocalations: </b>' + petData.inoculations;
                        p3.innerHTML = '<b>Diseases: </b>' + petData.diseases;
                        p4.innerHTML = '<b>Parasites: </b>' + petData.parasites; 
                    }
                })
            closePopap();
        });
    })
}

const closePopap = () => {
    let body = document.querySelector('body');
    let popapClose = document.querySelector('.popap_close');
    console.log(popapClose);
    let popap = document.querySelector('.popap');
    popapClose.addEventListener('click', () => {
        // console.log('djfhdj');
            popap.style.display = 'none';
    })
    popap.addEventListener('click', () => {
        // console.log('djfhdj');
            popap.style.display = 'none';
    })
    console.log('closePopap');
}

//change location main page to pets page
const changeLocationMainToPetsPage = () => {
    let hrefOurPetsGoToPetsPage = document.querySelector('.link__our_pets');
    hrefOurPetsGoToPetsPage.href = "../pets/pets.html";
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
    navigation.classList.remove('slide-out');
    navigation.classList.add('slide-in');
    shadow.classList.add('shadow_on');
}

//close mobile-menu

const closeBurgerMenu = (logo, burger, navigation, shadow, body) => {
    body.style.overflow = 'visible';
    logo.classList.remove('logo_opened_burger');
    burger.classList.remove('burger_reverse');
    shadow.classList.remove('shadow_on');
    navigation.classList.add('slide-out');
    navigation.classList.remove('slide-in');
}

// slider

const slider = () => {
    let pets = document.querySelectorAll('.slider__pets .block');
    let currentPet = 0;
    let isEnabled = true; 
    function changeCurrentPet(n) {
    // for creating continuous carousel
        currentPet = (n + pets.length) % pets.length;
    }
    
    function hidePet(direction) {
        isEnabled = false;
        pets[currentPet].classList.add(direction);
        pets[currentPet].addEventListener('animationend', function() {
            console.log('animationend')
            this.classList.remove('active', direction);
        })
    }
    
    function showPet(direction) {
        pets[currentPet].classList.add('next' ,direction);
        pets[currentPet].addEventListener('animationend', function() {
            this.classList.remove('next', direction);
            this.classList.add('active');
            isEnabled = true;
        })
    }

    function nextPet(n) {
        hidePet('to-left');
        changeCurrentPet(n + 1);
        showPet('from-right');
    }

    function previousPet(n) {
        hidePet('to-right');
        changeCurrentPet(n - 1);
        showPet('from-left');
    }

    let rightArrow = document.querySelector('.slider__right-arrow');
    rightArrow.addEventListener('click', (e) => {
        if(isEnabled) {
            nextPet(currentPet);
        }
    })

    let leftArrow = document.querySelector('.slider__left-arrow');
    leftArrow.addEventListener('click', () => {
        if(isEnabled) {
            previousPet(currentPet);
        }
    })
}
       
    // const arrowRight = () => {
    //     rightArrow = document.querySelector('.slider__right-arrow');
    //     let block2 = document.querySelector('.block_2');
    //     rightArrow.addEventListener('click', () => {
    //         block2.classList.add()
    //     })
    // }

// const showRandomCards = () => {
    
// }

// const showRandomCards = () => {
//     let rightArrow = document.querySelector('.slider__right-arrow');
//     rightArrow.addEventListener('click', () => {
//         let popapCards = document.querySelectorAll('.pet');

//         popapCards.forEach((popapCard, index) => {
//             popapCard.innerHTML = popapCards[popapCards.length - 1 - index].innerHTML;
           
//             console.log(popapCard);
//             // console.log(index);
//             // popapCards[popapCards.length - index].innerHTML = popapCard.innerHTML;
            
//             // console.log(popapCard.innerHTML);
//         })
//     })
// }

    // const showRandomCards = () => {
    //     let rightArrow = document.querySelector('.slider__right-arrow');
    //     let popapCards = Array.from(document.querySelectorAll('.pet'));

    //     let newpopapCards = [];
    //     rightArrow.addEventListener('click', () => {
            
    //         popapCards.forEach((popapCard, index) => {
    //             popapCard.innerHTML = popapCards[(index + 3) % popapCards.length].innerHTML;
    //             popapCards.splice(index, 1, popapCards[(index + 3) % popapCards.length]);
    //             console.log(popapCard);
    //             return popapCard;
                // console.log(index);
                // popapCards[popapCards.length - index].innerHTML = popapCard.innerHTML;
                
                // console.log(popapCard.innerHTML);
            // })
            // popapCards = document.querySelectorAll('.pet');

    //         console.log('_________');
    //     })
    // }

    // const createPopap = () => {
    // let sliderPets = document.querySelector('.slider__pets');
    // let pets = document.querySelectorAll('.pet');
    // // console.log(pets);
    // pets.forEach(pet => {
    //     pet.addEventListener('click', (e) => {
    //         console.log(e.target);
    //         let popap = document.createElement('div');
    //         let popapClose = document.createElement('div');
    //         let imgClose = document.createElement('img');
    //         let petPhoto = document.createElement('div');
    //         let popapCard = document.createElement('div');
    //         let popapPetInform = document.createElement('div');
    //         popap.classList.add('popap');
    //         popapClose.classList.add('popap_close');
    //         popapCard.classList.add('popap_card');
    //         petPhoto.classList.add('pet_photo');
    //         popapPetInform.classList.add('pet-inform');
    //         sliderPets.prepend(popap);
    //         popap.append(popapClose);
    //         popapClose.append(imgClose);
    //         imgClose.setAttribute('src', '../../assets/images/close.svg');
    //         popap.append(popapCard);
    //         popapCard.append(petPhoto);
    //         popapCard.append(popapPetInform);
    //         // petPhoto.style.background = 'green';
    //         petPhoto.style = 'background-image: url("' + pets[0].img + '")';
    //     })

    // })
    
// }