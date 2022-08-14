const slides = document.querySelectorAll(".slide");
const slides1 = document.querySelectorAll(".slide1");

const sli = document.querySelectorAll(".sli");
const boo = document.getElementById("myDIV");
const sli1 = document.querySelectorAll(".sli1");
const boo1 = document.getElementById("myDIV1");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 550) {
    document.getElementById("myDIV").classList.add("slideUp");
  }
  if (document.documentElement.scrollTop > 1235) {
    document.getElementById("onebook").classList.add("slideUp");
  }
  if (document.documentElement.scrollTop > 2555) {
    document.getElementById("wrapper").classList.add("slideUp");
  }
  if (
    document.documentElement.scrollTop > 3560 &&
    document.documentElement.scrollTop < 4474 &&
    document.documentElement.clientWidth > 992
  ) {
    document.getElementById("trans").style.transform = `translate3d(0,${
      document.documentElement.scrollTop - 3560
    }px,0)`;
  }
  if (document.documentElement.scrollTop > 4480) {
    document.getElementById("wrap").classList.add("slideUp");
  }
  if (
    document.documentElement.scrollTop > 5870 &&
    document.documentElement.scrollTop < 6445 &&
    document.documentElement.clientWidth > 992
  ) {
    document.getElementById("trans1").style.transform = `translate3d(0,${
      document.documentElement.scrollTop - 5970
    }px,0)`;
  }
  if (document.documentElement.scrollTop > 6730) {
    document.getElementById("myDIV1").classList.add("slideUp");
  }
}

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
slides1.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

sli.forEach((sli, indx) => {
  sli.style.transform = `translateX(${indx * 100}%)`;
});
sli1.forEach((sli1, indx) => {
  sli1.style.transform = `translateX(${indx * 100}%)`;
});

let curSli = 0;
let maxSli = (sli.length - 1) * 1000;
let curSli1 = 0;
let maxSli1 = (sli1.length - 1) * 1000;

let curSlide1 = 0;
let maxSlide1 = slides1.length - 1;
let curSlide = 0;
let maxSlide = slides.length - 1;

function fnc() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  if (curSlide1 === maxSlide1) {
    curSlide1 = 0;
  } else {
    curSlide1++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  slides1.forEach((slide1, indx) => {
    slide1.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
  });

  setTimeout(fnc, 6000);
}

fnc();

function fnc1() {
  if (curSli === maxSli - 2450) {
    curSli = 0;
  } else {
    curSli++;
  }

  if (curSli1 === maxSli1 - 2450) {
    curSli1 = 0;
  } else {
    curSli1++;
  }

  sli.forEach((sli, indx) => {
    sli.style.transform = `translateX(${(indx * 1000 - curSli) / 10}%)`;
  });

  sli1.forEach((sli1, indx) => {
    sli1.style.transform = `translateX(${(indx * 1000 - curSli1) / 10}%)`;
  });

  setTimeout(fnc1, 8);
}

fnc1();
