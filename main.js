
const typed = new Typed("#multiple-text", {
    strings: ["مهندس ميكانيكا", " مدير تحرير - وكالة انباء الشرق الاوسط ", "رئيس مؤسسة عين مصر" , "مؤسس مبادرة قد التحدي "],
    typeSpeed: 50, // زيادة سرعة الكتابة
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


window.onscroll = () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 200);
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

// شيفرة الشريحة الثالثة

const sliderList2 = document.querySelector('.slider2 .list2');
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
const dots2 = document.querySelectorAll('.slider2 .dots2 .dot2');

const images2 = [
    "./images/img-(10).jpg",
    "./images/img-(11).jpg",
    "./images/img-(12).jpg",
    "./images/img-(13).jpg",
    "./images/img-(14).jpg",
    "./images/img-(15).jpg",
];

let active2 = 0;

reloadSlider2();

function reloadSlider2() {
    const activeImage2 = document.querySelector('.slider2 .list2 .item2 img');
    activeImage2.src = images2[active2];

    dots2.forEach((dot, index) => {
        dot.classList.toggle('active2', index === active2);
    });
}

function handleNext2() {
    active2 = (active2 + 1) % images2.length;
    reloadSlider2();
}

function handlePrev2() {
    active2 = (active2 - 1 + images2.length) % images2.length;
    reloadSlider2();
}

function handleDotClick2(index) {
    active2 = index;
    reloadSlider2();
}

nextButton2.addEventListener('click', handleNext2);
prevButton2.addEventListener('click', handlePrev2);

dots2.forEach((dot, index) => {
    dot.addEventListener('click', () => handleDotClick2(index));
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
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.mySwiper', {
      // Your Swiper configuration options here
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 5000, // تعيين تأخير التحرك إلى اليمين بمقدار ثانية واحدة
        disableOnInteraction: false, // يجعل العرض التلقائي يستمر حتى بعد التفاعل مع المستخدم
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
  });
  