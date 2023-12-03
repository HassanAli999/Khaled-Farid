
const typed = new Typed("#multiple-text", {
    strings: ["مهندس ميكانيكا", " مدير تحرير - وكالة انباء الشرق الاوسط ", "رئيس مؤسسة عين مصر" , "مؤسس مبادرة قد التحدي "],
    typeSpeed: 50, // زيادة سرعة الكتابة
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


window.onscroll = () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
};

const sliderList = document.querySelector('.slider .list');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.slider .dots .dot');

const images = [
    "./images/img-2019 (1).jpg",
    "./images/img-2019 (2).jpg",
    "./images/img-2019 (3).jpg",
    "./images/img-2019 (5).jpg",
];

let active = 0;

reloadSlider();

function reloadSlider() {
    const activeImage = document.querySelector('.slider .list .item img');
    activeImage.src = images[active];

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === active);
    });
}

function handleNext() {
    active = (active + 1) % images.length;
    reloadSlider();
}

function handlePrev() {
    active = (active - 1 + images.length) % images.length;
    reloadSlider();
}

function handleDotClick(index) {
    active = index;
    reloadSlider();
}

nextButton.addEventListener('click', handleNext);
prevButton.addEventListener('click', handlePrev);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => handleDotClick(index));
});

// شيفرة الشريحة الثانية

const sliderList1 = document.querySelector('.slider1 .list1');
const prevButton1 = document.getElementById('prev1');
const nextButton1 = document.getElementById('next1');
const dots1 = document.querySelectorAll('.slider1 .dots1 .dot1');

const images1 = [
    "./images/img-2019-معرض الكتاب (6).jpg",
    "./images/img-2019-معرض الكتاب (1).jpg",
    "./images/img-2019-معرض الكتاب (2).jpg",
    "./images/img-2019-معرض الكتاب (3).jpg",
    "./images/img-2019-معرض الكتاب (4).jpg",
    "./images/img-2019-معرض الكتاب (5).jpg",
];

let active1 = 0;

reloadSlider1();

function reloadSlider1() {
    const activeImage1 = document.querySelector('.slider1 .list1 .item1 img');
    activeImage1.src = images1[active1];

    dots1.forEach((dot, index) => {
        dot.classList.toggle('active1', index === active1);
    });
}

function handleNext1() {
    active1 = (active1 + 1) % images1.length;
    reloadSlider1();
}

function handlePrev1() {
    active1 = (active1 - 1 + images1.length) % images1.length;
    reloadSlider1();
}

function handleDotClick1(index) {
    active1 = index;
    reloadSlider1();
}

nextButton1.addEventListener('click', handleNext1);
prevButton1.addEventListener('click', handlePrev1);

dots1.forEach((dot, index) => {
    dot.addEventListener('click', () => handleDotClick1(index));
});

var videos = document.querySelectorAll('video');

videos.forEach(function(video) {
    video.addEventListener('play', function() {
        pauseOtherVideos(video);
    });

    video.addEventListener('ended', function() {
        // يتم إيقاف تشغيل الفيديو عند انتهاء التشغيل
        video.pause();
    });
});

function pauseOtherVideos(currentVideo) {
    videos.forEach(function(video) {
        if (video !== currentVideo) {
            video.pause();
        }
    });
}