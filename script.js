const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

// start is my main code

const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const today = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
  header.innerHTML = '<img src="Photos/hacker2.jpg" alt="" />';
  title.innerHTML = " Introduction Of My Skills ";
  excerpt.innerHTML =
    " 1. C|EH One Year experience.   2.Comp.Networking 2 month experience.   3.HTML,CSS , JavaScript 90 Days experience. ";
  profile_img.innerHTML = '<img src="Photos/img1-logo.jpg" alt="" />';
  name.innerHTML = "Cyber Ghost";
  date.innerHTML = ` Mar 23, 2024`;
  animated_bgs.forEach((background) =>
    background.classList.remove("animated-bg")
  );
  animated_bg_texts.forEach((background) =>
    background.classList.remove("animated-bg-text")
  );
};

setTimeout(getData, 2500);

// box 1

const header1 = document.getElementById("header1");
const title1 = document.getElementById("title1");
const excerpt1 = document.getElementById("excerpt1");
const profile_img1 = document.getElementById("profile-img1");
const name1 = document.getElementById("name1");
const date1 = document.getElementById("date1");
const today1 = new Date();
const monthNames1 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const animated_bgs1 = document.querySelectorAll(".animated-bg1");
const animated_bg_texts1 = document.querySelectorAll(".animated-bg-text1");

const getData1 = () => {
  header1.innerHTML = '<img src="Photos/hacker1.jpg" alt="" />';
  title1.innerHTML = "Let's Hack The Tech";
  excerpt1.innerHTML =
    "Cybersecurity refers to the practice of protecting  internet-connected systems, including software, and  data from attack ,or unauthorized access ";
  profile_img1.innerHTML = '<img src="Photos/img1-logo.jpg" alt="" />';
  name1.innerHTML = "Cyber Ghost";
  date1.innerHTML = `${
    monthNames1[today1.getMonth()]
  } ${today1.getDate()}, ${today1.getFullYear()}`;
  animated_bgs1.forEach((background1) =>
    background1.classList.remove("animated-bg1")
  );
  animated_bg_texts1.forEach((background1) =>
    background1.classList.remove("animated-bg-text1")
  );
};

setTimeout(getData1, 2500);

// box 2

const header2 = document.getElementById("header2");
const title2 = document.getElementById("title2");
const excerpt2 = document.getElementById("excerpt2");
const profile_img2 = document.getElementById("profile-img2");
const name2 = document.getElementById("name2");
const date2 = document.getElementById("date2");
const today2 = new Date();
const monthNames2 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const animated_bgs2 = document.querySelectorAll(".animated-bg2");
const animated_bg_texts2 = document.querySelectorAll(".animated-bg-text2");

const getData2 = () => {
  header2.innerHTML = '<img src="Photos/hacker4.png" alt=""  />';
  title2.innerHTML = "Everything is Possible Yes!";
  excerpt2.innerHTML =
    " Why be afraid of what will happen in life, if nothing happens then it will be an experience.";
  profile_img2.innerHTML = '<img src="Photos/img1-logo.jpg" alt="" />';
  name2.innerHTML = "Cyber Ghost";
  date2.innerHTML = `${
    monthNames2[today2.getMonth()]
  } ${today2.getDate()}, ${today2.getFullYear()}`;
  animated_bgs2.forEach((background2) =>
    background2.classList.remove("animated-bg2")
  );
  animated_bg_texts2.forEach((background2) =>
    background2.classList.remove("animated-bg-text2")
  );
};

setTimeout(getData2, 2500);

// box1 and box2 code End

let onSlide = false;

window.addEventListener("load", () => {
  autoSlide();

  const dots = document.querySelectorAll(".carousel_dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => slide(i));
  }

  const buttonPrev = document.querySelector(".carousel_button__prev");
  const buttonNext = document.querySelector(".carousel_button__next");
  buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
  buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
});

function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 3000); // slide speed = 3s
}

function slide(toIndex) {
  if (onSlide) return;
  onSlide = true;

  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item__active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  let newItemActive = null;

  if (toIndex > itemActiveIndex) {
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
      toIndex = 0;
    }

    newItemActive = itemsArray[toIndex];

    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
    }, 20);
  } else {
    // check if toIndex exceeds the number of carousel items
    if (toIndex < 0) {
      toIndex = itemsArray.length - 1;
    }

    newItemActive = itemsArray[toIndex];

    // start transition
    newItemActive.classList.add("carousel_item__pos_prev");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item__prev");
      itemActive.classList.add("carousel_item__prev");
    }, 20);
  }

  // remove all transition class and switch active class
  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
    },
    {
      once: true,
    }
  );

  slideIndicator(toIndex);
}

function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item__active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemActiveIndex;
}

function slideIndicator(toIndex) {
  const dots = document.querySelectorAll(".carousel_dot");
  const dotActive = document.querySelector(".carousel_dot__active");
  const newDotActive = dots[toIndex];

  dotActive.classList.remove("carousel_dot__active");
  newDotActive.classList.add("carousel_dot__active");
}
// carousel start a code
