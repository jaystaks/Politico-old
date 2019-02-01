let collapsibleBox = document.querySelector('header.front .bottom-header .box');
let mobileMenu = document.querySelector('header.front .bottom-header ul');

collapsibleBox.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// pop up notification

let signUpModal = document.querySelector('.modal-box.signup');
let logInModal = document.querySelector('.modal-box.login');
let logInLink = document.querySelector('.log-in-link');
let signUpLink = document.querySelector('.sign-up-link');
let closeBtn = document.querySelector('.close-button');

// function to add show class to the sign up modal
let showSignUpModal = () => signUpModal.classList.add('show');

// function to add show class to the login modal
let showlogInModal = () => logInModal.classList.add('show');

// function to add show class to the sign up modal
let showsignUpModal = () => logInModal.classList.add('show');

// function to remove modal from login and sign up modal
let closeModal = () => {
  signUpModal.classList.remove('show');
  logInModal.classList.remove('show');
};

// attach event listener to the log in links and add show class on click
logInLink.addEventListener('click', showlogInModal, );
signUpLink.addEventListener('click', showsignUpModal);


closeBtn.addEventListener("click", closeModal);


// sign up and login redirects to profile page
let logInButton = document.getElementById("login-button")
logInButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'dashboard/profile.html'
})
let signUpButton = document.getElementById("signup-button")
logInButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'dashboard/profile.html'
})

$('.form').find('input, textarea').on('keyup blur focus', function(e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    } else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

$('.tab a').on('click', function(e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});

let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
