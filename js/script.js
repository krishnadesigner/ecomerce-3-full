let navBar = document.querySelector('#navbar');
let close = document.querySelector('#close');

var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');


const contentContent = document.querySelectorAll('.content');



document.querySelector('#bar').onclick = () => {
    navBar.classList.toggle('active');
}


document.querySelector('#close').onclick = () => {
    navBar.classList.remove('active');
}



smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
    MainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
    MainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
    MainImg.src = smallImg[3].src;
}

smallImg[4].onclick = function() {
    MainImg.src = smallImg[4].src;
}





let countElemets =1;
setInterval (() => {
    countElemets ++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");
    if (countElemets > contentContent.length){
        contentContent[0].classList.add("current");
        countElemets = 1;
    }

    else{
        currentElement.nextElementSibling.classList.add("current");
    }
}, 1000);